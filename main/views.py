from urllib import request
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.contrib import messages
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import SignupSerializer, CustomOrderSerializer, RegisterSerializer, MyTokenObtainPairSerializer
from .models import CustomOrder, CustomUser
from rest_framework import generics,status, viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated

class CustomOrderView(viewsets.ModelViewSet):
    queryset = CustomOrder.objects.all()
    serializer_class = CustomOrderSerializer


@api_view(['POST'])
def addCustomOrder(request):
	serilizer = CustomOrderSerializer(data=request.data)

	if serilizer.is_valid():
		serilizer.save()

	return Response(serilizer.data)

@api_view(['GET'])
def showAllCustomOrders(request):

	orders = CustomOrder.objects.all()
	serilizer = CustomOrderSerializer(orders, many=True)
	return Response(serilizer.data)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = request.POST.get('text')
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


# class CustomOrderView(APIView):
# 	serializer_class = CustomOrderSerializer
# 	def post(self, request, format=None):
# 		serializer = self.serializer_class(data=request.data)
# 		if serializer.is_valid():
# 			project_name = serializer.data.get('project_name')
# 			customer_name = serializer.data.get('customer_name')
# 			adress = serializer.data.get('adress')
# 			room_type = serializer.data.get('room_type')
# 			room_name = serializer.data.get('room_name')
# 			drawer_type = serializer.data.get('drawer_type')
# 			assembly_method = serializer.data.get('assembly_method')
# 			assembly_method_wood_drawer = serializer.data.get('assembly_method_wood_drawer')
# 			side_height = serializer.data.get('side_height')
# 			side_align = serializer.data.get('side_align')
# 			base_type = serializer.data.get('base_type')
# 			base_height = serializer.data.get('base_height')
# 			return Response(CustomOrderSerializer().data, status=status.HTTP_200_OK)







# def registerPage(request):
#     if request.user.is_authenticated:
# 		return redirect('home')
# 	else:
# 		serializer = SignupSerializer
# 		if request.method == 'POST':
# 			form = SignupSerializer(request.POST)
# 			if form.is_valid():
# 				form.save()
# 				user = form.cleaned_data.get('username')
# 				messages.success(request, 'Account was created for ' + user)
# 				return redirect('login')
# 		context = {'form':form}
# 		return render(request, 'accounts/register.html', context)

# def loginPage(request):
# 	if request.user.is_authenticated:
# 		return redirect('home')
# 	else:
# 		if request.method == 'POST':
# 			email = request.POST.get('email')
# 			password =request.POST.get('password')

# 			user = authenticate(request, email=email, password=password)

# 			if user is not None:
# 				login(request, user)
# 				return redirect('')
# 			else:
# 				messages.info(request, 'Username OR password is incorrect')

# 		context = {}
# 		return render(request, 'accounts/login.html', context)

# class SignUpView(generics.ListAPIView):
#     queryset = CustomUser.objects.all()
#     serializer_class = SignupSerializer

#     def save(self, commit=True):
#             user = super().save(commit=False)
#             user.set_password(self.fields["password"])
#             if commit:
#                 user.save()
#             return user

# class LoginView(APIView):
#      def post(self, request, format=None):
#         if not self.request.session.exists(self.request.session.session_key):
#             self.request.session.create()
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
            