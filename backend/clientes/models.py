from django.db import models

# Create your models here.

class Cliente(models.Model):
    name=models.CharField(max_length=32) 
    surname=models.CharField(max_length=32) 
    email = models.EmailField(max_length=254)
    born_date=models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    is_active=models.BooleanField(default=True)
    class Meta:
        ordering = ["name"]
    def __str__(self):
        return self.name
 
