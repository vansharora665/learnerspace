from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import (
    RegisterUserView,
    VideoUploadView,
    VideoListView,
    VideoDetailView
)

urlpatterns = [
    # User registration
    path('register/', RegisterUserView.as_view(), name='register'),

    # JWT Authentication
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('videos/', VideoListView.as_view(), name='video-list'),
]