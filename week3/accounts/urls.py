from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),       # ← Must exist
    path('dashboard/', views.dashboard_view, name='dashboard'),  # ← Must exist
    path('verify/<str:token>/', views.verify_view, name='verify'),
    path('logout/', views.logout_view, name='logout'),
]