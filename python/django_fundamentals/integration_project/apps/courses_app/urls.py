from django.conf.urls import url
from . import views
# from django.contrib import admin

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^create$', views.create, name='create'),
    url(r'^deleteconfirm/(?P<course_id>\d+)$', views.show_destroy, name='show_destroy'),
    url(r'^destroy/(?P<course_id>\d+)$', views.destroy, name='destroy'),
    url(r'^user_courses$', views.user_courses, name='user_courses'),
    url(r'^add_user_to_course$', views.add_user_to_course, name='add_user_to_course')
]