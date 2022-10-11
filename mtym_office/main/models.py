
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from phonenumber_field.modelfields import PhoneNumberField

class CustomOrder(models.Model):
    project_name = models.CharField(max_length=99, default = "")
    customer_name = models.CharField(max_length=99, default = "")
    adress = models.CharField(max_length=99, default = "")
    room_type = models.CharField(max_length=99, default = "")
    room_name = models.CharField(max_length=99, default = "")
    drawer_type = models.CharField(max_length=99, default = "")
    assembly_method = models.CharField(max_length=99, default = "")
    assembly_method_wood_drawer = models.CharField(max_length=99, default = "")
    side_height = models.CharField(max_length=99)
    side_align = models.CharField(max_length=99, default = "")
    base_type = models.CharField(max_length=99, default = "")
    base_height = models.CharField(max_length=99, default = "")
    close_furniture_material = models.CharField(max_length=99, default = "")
    inner_drawer_material = models.CharField(max_length=99, default = "")
    base_material = models.CharField(max_length=99, default = "")
    fridge_finishing = models.CharField(max_length=99, default = "")
    front_type = models.CharField(max_length=99, default = "")
    front_model = models.CharField(max_length=99, default = "")
    front_material = models.CharField(max_length=99, default = "")
    front_finish = models.CharField(max_length=99, default = "")
    side_type = models.CharField(max_length=99, default = "")
    side_model = models.CharField(max_length=99, default = "")
    side_material = models.CharField(max_length=99, default = "")
    side_finish = models.CharField(max_length=99, default = "")
    rail = models.CharField(max_length=99, default = "")
    spacing = models.CharField(max_length=99, default = "")
    outer_drawer_type = models.CharField(max_length=99, default = "")
    inner_drawer_type = models.CharField(max_length=99, default = "")
    handle = models.CharField(max_length=99, default = "")
    opening_mechanisms = models.CharField(max_length=99, default = "")
    tone = models.CharField(max_length=99, default = "")
    oven = models.CharField(max_length=99, default = "")
    stove_top = models.CharField(max_length=99, default = "")
    dishwasher = models.CharField(max_length=99, default = "")
    microwave = models.CharField(max_length=99, default = "")
    stove_ventilator = models.CharField(max_length=99, default = "")
    fridge = models.CharField(max_length=99, default = "")
    parquet = models.CharField(max_length=99, default = "")
    parquet_size = models.CharField(max_length=99, default = "")
    led = models.CharField(max_length=99, default = "")
    hanging_method = models.CharField(max_length=99, default = "")
    closing = models.CharField(max_length=99, default = "")
    cornice = models.CharField(max_length=99, default = "")
    cornice_length = models.CharField(max_length=99, default = "")
    legs = models.CharField(max_length=99, default = "")
    marble_thickness = models.CharField(max_length=99, default = "")
    final_height = models.CharField(max_length=99, default = "")
    top_surfaces_type = models.CharField(max_length=99, default = "")
    top_surfaces_thickness = models.CharField(max_length=99, default = "")

    def __str__(self):
        return self.project_name

class CustomUserManager(BaseUserManager):
    
    def create_user(self, email, first_name, last_name, company_name, company_adress, company_phone, password):

        email = self.normalize_email(email)
        user = self.model(email=self.normalize_email(email), 
                          first_name=first_name,                   
                          last_name=last_name, 
                          company_name=company_name,
                          company_adress=company_adress, company_phone=company_phone)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, first_name, last_name, company_name, company_adress, company_phone, password):

        user = self.create_user(email, first_name, last_name, company_name, company_adress, company_phone, password)
        user.is_admin = True
        user.is_staff = True
        user.is_superuser = True
        user.is_active = True
        user.save(using=self._db)
        return user
        

class CustomUser(AbstractBaseUser):
    
    email           = models.EmailField(('email adress'), unique=True)
    first_name      = models.CharField(max_length=150)
    last_name       = models.CharField(max_length=150)
    company_name    = models.CharField(max_length=150, unique=True)
    company_adress  = models.CharField(max_length=150)
    company_phone   = models.CharField(max_length=150)
    is_admin        = models.BooleanField(default = False)
    is_active       = models.BooleanField(default = False)
    is_staff        = models.BooleanField(default = False)
    is_superuser    = models.BooleanField(default = False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ["first_name", "last_name", "company_name", "company_adress", "company_phone"]
    objects = CustomUserManager()
    def __str__(self):
        return self.company_name
    def has_perm(self,perm,obj=None):
        return self.is_admin
    def has_module_perms(self, app_Label):
        return True






