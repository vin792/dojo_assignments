from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^add$', views.add_book, name='add_book'),
    url(r'^createbook$', views.create_book, name='create_book'),
    url(r'^(?P<book_id>\d+)$', views.display_book, name='display_book'),
    url(r'^createreview/(?P<book_id>\d+)$', views.create_review, name='create_review'),
    url(r'^destroyreview/(?P<review_id>\d+)$', views.destroy_review, name='destroy_review'),
    url(r'^user/(?P<user_id>\d+)$', views.display_user, name='display_user')
]
