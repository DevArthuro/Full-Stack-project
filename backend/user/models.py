from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.translation import gettext_lazy as _

class UserManagement(BaseUserManager):
    def _create_user(self, email, name, password, **extra_fields):
        if not email:
            raise ValueError(_('The Email field must be set'))
        if not name: 
            raise ValueError(_('The Name field must be set'))
        if not password: 
            raise ValueError(_('The Password field must be set'))
        
        email = self.normalize_email(email)
        user = self.model(email = email, name = name, **extra_fields)
        user.set_password(password)
        user.save()
        
        return user

    def create_user(self, email, name, password, **extra_fields):
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_staff', False)
        return self._create_user(email, name, password, **extra_fields)
    
    def create_superuser(self, email, name, password, **extra_fields):
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)
        return self._create_user(email, name, password, **extra_fields)

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_('Email address'), max_length=200, unique=True)
    name = models.CharField(_('name user'), max_length=200)
    created_at = models.DateTimeField(_('created_at'), auto_now_add=True)
    updated_at = models.DateTimeField(_('updated_at'), auto_now=True)
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']
    
    is_active = False
    is_superuser = False
    is_staff = False
    
    objects = UserManagement
    
    def __str__(self) -> str:
        return str(self.name)