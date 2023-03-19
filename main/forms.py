from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import ReadOnlyPasswordHashField
from .forms import CustomUser

class RegistrationForm():
    email = forms.EmailField(required=True)

    


class UserAdminCreationForm(forms.ModelForm):
    
    class Meta:
        model = CustomUser
        fields = ["first_name", "last_name", "company_name", "email", "company_adress", "company_phone", "password"]

    def save(self, commit=True):
        # Save the provided password in hashed format
        user = super().save(commit=False)
        user.set_password(self.fields["password"])
        if commit:
            user.save()
        return user

class UserAdminChangeForm(forms.ModelForm):
    
    password = ReadOnlyPasswordHashField()

    class Meta:
        model = CustomUser
        fields = ["first_name", "last_name", "company_name", "email", "company_adress", "company_phone", "password"]

