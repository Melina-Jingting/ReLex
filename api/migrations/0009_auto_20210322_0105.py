# Generated by Django 2.2.13 on 2021-03-22 01:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20210321_1410'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='experience',
            name='company',
        ),
        migrations.AlterField(
            model_name='company',
            name='name',
            field=models.CharField(max_length=255),
        ),
    ]
