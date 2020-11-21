from django.urls import path
from .views.photo_views import Photos, PhotoDetail
from .views.user_views import SignUp, SignIn, SignOut, ChangePassword

urlpatterns = [
  	# Restful routing
    path('photos/', Photos.as_view(), name='photos'),
    path('photos/<int:pk>/', PhotoDetail.as_view(), name='photo_detail'),
    path('sign-up/', SignUp.as_view(), name='sign-up'),
    path('sign-in/', SignIn.as_view(), name='sign-in'),
    path('sign-out/', SignOut.as_view(), name='sign-out'),
    path('change-pw/', ChangePassword.as_view(), name='change-pw')
]
