from django.conf.urls import url, include
from . import views
#from django.contrib import admin

urlpatterns = [
    url(r'^$', views.index),
    url(r'^survey/process$', views.survey_process),
    url(r'^results$', views.results)
]