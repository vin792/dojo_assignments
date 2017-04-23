from django.conf.urls import url
from . import views
# from django.contrib import admin

urlpatterns = [
    url(r'^$', views.index),
    url(r'^emails$', views.emails),
    url(r'^create$', views.create),
    url(r'^destroy/(?P<email_id>\d+$)', views.destroy)
]