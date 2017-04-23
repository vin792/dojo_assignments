from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^success$', views.success, name='success'),
    url(r'^register$', views.register, name='register'),
    url(r'^user_login$', views.login, name='user_login')
]
