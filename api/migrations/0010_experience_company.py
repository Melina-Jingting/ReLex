# Generated by Django 2.2.13 on 2021-03-22 01:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20210322_0105'),
    ]

    operations = [
        migrations.AddField(
            model_name='experience',
            name='company',
            field=models.ForeignKey(default=7, on_delete=django.db.models.deletion.CASCADE, to='api.Company'),
        ),
    ]
