from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^process_money/(?P<place>[a-zA-z]+$)', views.process_money)
]