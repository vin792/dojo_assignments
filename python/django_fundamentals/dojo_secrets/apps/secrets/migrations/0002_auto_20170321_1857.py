# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-03-21 18:57
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('secrets', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='secret',
            old_name='user',
            new_name='user_id',
        ),
    ]
