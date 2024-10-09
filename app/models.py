from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    sold = models.BooleanField(default=False)  # Sold out status
    is_new = models.BooleanField(default=False)  # New arrival status
    has_offer = models.BooleanField(default=False)  # Indicates if there is an active offer
    offer_expiry = models.DateTimeField(null=True, blank=True)  # Expiration time of the offer


    def __str__(self):
        return self.name
    
    def is_offer_expired(self):
        """Check if the offer has expired."""
        if self.has_offer and self.offer_expiry:
            return timezone.now() > self.offer_expiry
        return False

class CartItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f'{self.quantity} x {self.product.name}'
        
class NewsletterSubscriber(models.Model):
    email = models.EmailField(unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.email
