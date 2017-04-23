from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^create$', views.create, name='create'),
    url(r'^destroy/(?P<secret_id>\d+)$', views.destroy, name='destroy'),
    url(r'^like/(?P<secret_id>\d+)$', views.like, name='like'),
    url(r'^most_popular$', views.most_popular, name='most_popular'),
]