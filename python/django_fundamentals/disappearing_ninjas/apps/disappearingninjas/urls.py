from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^ninjas$', views.display_all),
    url(r'^ninjas/(?P<color>[a-zA-Z]+$)', views.turtles),
]