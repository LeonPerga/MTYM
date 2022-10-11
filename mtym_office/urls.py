
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from main.views import CustomOrderView, MyTokenObtainPairView,  RegisterView
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

route  = routers.DefaultRouter()
route.register("", CustomOrderView, basename='customorderview')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(route.urls)),
    path('api/users/', include("main.urls")),
    path('', include('frontend.urls')),
]
