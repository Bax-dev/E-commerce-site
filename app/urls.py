from django.urls import path
from .views import *
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api/login/', LoginView.as_view() , name='login'),
    path('api/signup/', SignUpView.as_view(), name='signup'),
    path('api/newletter/', NewsletterSignup.as_view(), name='newsletter_signup'),
    path('api/products/', ProductListView.as_view(), name='product-list'),
    path('api/cart/', CartItemListView.as_view(), name='cart-list'),
    path('api/newletter/<int:pk>/', NewsletterSignup.as_view(), name='newsletter_signup'),

    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
