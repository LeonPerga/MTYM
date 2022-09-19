
from django.urls import path, include
from .views import showAllCustomOrders, addCustomOrder
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('custom', showAllCustomOrders, name = "show-all"  ),
    path('add', addCustomOrder, name='add-order'),
]