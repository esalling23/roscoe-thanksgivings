from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly
from rest_framework.exceptions import PermissionDenied
from rest_framework import generics, status
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user, authenticate, login, logout
from django.middleware.csrf import get_token

from ..models.photo import Photo
from ..serializers import PhotoSerializer, UserSerializer

# Create your views here.
class Photos(generics.ListCreateAPIView):
    permission_classes=()
    serializer_class = PhotoSerializer
    def get(self, request):
        """Index request"""
        # Get all the photos:
        photos = Photo.objects.all()
        # Filter the photos by owner, so you can only see your owned photos
        # photos = Photo.objects.filter(owner=request.user.id)
        # Run the data through the serializer
        data = PhotoSerializer(photos, many=True).data
        print(data)
        return Response({ 'photos': data })

    def post(self, request):
        """Create request"""
        # Add user to request data object
        request.data['photo']['owner'] = request.user.id
        # Serialize/create photo
        photo = PhotoSerializer(data=request.data['photo'])
        # If the photo data is valid according to our serializer...
        if photo.is_valid():
            # Save the created photo & send a response
            photo.save()
            return Response({ 'photo': photo.data }, status=status.HTTP_201_CREATED)
        # If the data is not valid, return a response with the errors
        return Response(photo.errors, status=status.HTTP_400_BAD_REQUEST)

class PhotoDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes=(IsAuthenticated,)
    def get(self, request, pk):
        """Show request"""
        # Locate the photo to show
        photo = get_object_or_404(Photo, pk=pk)
        # Only want to show owned photos?
        if not request.user.id == photo.owner.id:
            raise PermissionDenied('Unauthorized, you do not own this photo')

        # Run the data through the serializer so it's formatted
        data = PhotoSerializer(photo).data
        return Response({ 'photo': data })

    def delete(self, request, pk):
        """Delete request"""
        # Locate photo to delete
        photo = get_object_or_404(Photo, pk=pk)
        # Check the photo's owner agains the user making this request
        if not request.user.id == photo.owner.id:
            raise PermissionDenied('Unauthorized, you do not own this photo')
        # Only delete if the user owns the  photo
        photo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def partial_update(self, request, pk):
        """Update Request"""
        # Remove owner from request object
        # This "gets" the owner key on the data['photo'] dictionary
        # and returns False if it doesn't find it. So, if it's found we
        # remove it.
        if request.data['photo'].get('owner', False):
            del request.data['photo']['owner']

        # Locate Photo
        # get_object_or_404 returns a object representation of our Photo
        photo = get_object_or_404(Photo, pk=pk)
        # Check if user is the same as the request.user.id
        if not request.user.id == photo.owner.id:
            raise PermissionDenied('Unauthorized, you do not own this photo')

        # Add owner to data object now that we know this user owns the resource
        request.data['photo']['owner'] = request.user.id
        # Validate updates with serializer
        data = PhotoSerializer(photo, data=request.data['photo'])
        if data.is_valid():
            # Save & send a 204 no content
            data.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        # If the data is not valid, return a response with the errors
        return Response(data.errors, status=status.HTTP_400_BAD_REQUEST)
