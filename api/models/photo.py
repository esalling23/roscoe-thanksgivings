from django.db import models
from io import BytesIO
from PIL import Image
from django.core.files import File

# image compression method
def compress(image):
    im = Image.open(image)
    im_io = BytesIO()
    im.save(im_io, 'JPEG', quality=60)
    new_image = File(im_io, name=image.name)
    return new_image

class Photo(models.Model):
    file = models.ImageField()
    year = models.CharField(max_length=4)
    def __str__(self):
        print(self.file)
        return self.file.name

    # calling image compression function before saving the data
    def save(self, *args, **kwargs):
        new_image = compress(self.file)
        self.file = new_image
        super().save(*args, **kwargs)
