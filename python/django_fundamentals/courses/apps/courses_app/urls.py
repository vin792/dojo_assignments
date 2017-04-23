from django.conf.urls import url
from . import views
# from django.contrib import admin

urlpatterns = [
    url(r'^$', views.index),
    url(r'^create$', views.create),
    url(r'^deleteconfirm/(?P<course_id>\d+)$', views.show_destroy),
    url(r'^destroy/(?P<course_id>\d+)$', views.destroy)
]