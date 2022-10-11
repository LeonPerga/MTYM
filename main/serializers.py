from rest_framework import serializers
from .models import CustomUser, CustomOrder
from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class CustomOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomOrder
        fields = '__all__'


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['email'] = user.email
        token['first_name'] = user.first_name
        token['last_name'] = user.last_name
        token['company_name'] = user.company_name
        token['company_adress'] = user.company_adress
        token['company_phone'] = user.company_phone
        return token
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = CustomUser
        fields = ["first_name", "last_name", "company_name", "email", "company_adress", "company_phone", "password", "password2"]


    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = CustomUser.objects.create(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            company_name=validated_data['company_name'],
            company_adress=validated_data['company_adress'],
            company_phone=validated_data['company_phone'],
        )

        user.set_password(validated_data['password'])
        user.save()

        return user

    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["first_name", "last_name", "company_name", "email", "company_adress", "company_phone", "password"]
        
class SignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ["first_name", "last_name", "company_name", "email", "company_adress", "company_phone", "password"]
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        user = CustomUser.objects.create_user(validated_data['first_name'], validated_data['last_name'], validated_data['company_name'], validated_data['email'] ,validated_data['company_adress'], validated_data['company_phone'] ,validated_data['password'])
        return user


class LoginSerializer(serializers.Serializer):
 email = serializers.CharField()
 password = serializers.CharField()

def validate(self, data):
    user = authenticate(**data)
    if user and user.is_active:
        return user
    raise serializers.ValidationError("Incorrect Credentials")
