from django.db import models


class Book(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    published_date = models.DateField()
    isbn = models.CharField(max_length=13, unique=True)  # 新增字段

    def __str__(self):
        return self.title


from django.db import models

# Create your models here.
