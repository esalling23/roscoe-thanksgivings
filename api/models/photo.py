from django.db import models

class Photo(models.Model):
    file = models.FileField()
    year = models.CharField(max_length=4)
    def __str__(self):
        print(self.file)
        return self.file.name
