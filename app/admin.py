from django.contrib import admin
from .models import *
from django.utils.html import format_html

# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ('name', 'description', 'image_tag', 'created_at')
    
#     # This method allows you to show the image in the admin interface
#     def image_tag(self, obj):
#         if obj.image:
#             return format_html('<img src="{}" width="50" height="50" />'.format(obj.image.url))
#         return "No Image"
#     image_tag.short_description = 'Image'

# class WearsAdmin(admin.ModelAdmin):
#     list_display = ('name', 'description', 'is_on_sale','is_sold_out','price', 'is_new', 'image')
    
#     # This method allows you to show the image in the admin interface
#     def image_tag(self, obj):
#         if obj.image:
#             return format_html('<img src="{}" width="50" height="50" />'.format(obj.image.url))
#         return "No Image"
#     image_tag.short_description = 'Image'

# admin.site.register(Category, CategoryAdmin)
# admin.site.register(Wears,WearsAdmin)
admin.site.register(NewsletterSubscriber)
admin.site.register(Product)
admin.site.register( CartItem);
