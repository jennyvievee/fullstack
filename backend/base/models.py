from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Product(models.Model):
    product_name = models.CharField(max_length=255)
    product_price = models.DecimalField(max_digits=10, decimal_places=2)
    brand = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    countInStock = models.IntegerField()
    image = models.ImageField(upload_to='product_images/')
    createdAt = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"{self.product_name}, Stock: {self.countInStock}"

class CartUser(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    qty = models.IntegerField()

    def __str__(self):
        return f" Username: {self.user.username}, Product Name: {self.product.product_name}"

class PaymentMethod(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    is_paid = models.BooleanField()
    paid_at = models.DateTimeField()
    paymongo_payment_id = models.CharField(max_length=255)
    paymongo_status = models.CharField(max_length=255)

    def __str__(self):
        return f"Total Price: {self.total_price}, "
    
class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    payment = models.ForeignKey(PaymentMethod, on_delete=models.CASCADE)
    qty = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return f"Product: {self.product} "

class ShippingAddress(models.Model):
     payment = models.ForeignKey(PaymentMethod, on_delete=models.CASCADE)
     full_name =  models.CharField(max_length=255)
     address =  models.CharField(max_length=255)
     city =  models.CharField(max_length=255)
     postal_code =  models.CharField(max_length=255)
     country =  models.CharField(max_length=255)

def __str__(self):
        return f"Full Name: {self.full_name} Address: {self.address}"
