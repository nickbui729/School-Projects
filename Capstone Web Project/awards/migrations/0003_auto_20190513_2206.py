# Generated by Django 2.2.1 on 2019-05-14 05:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('awards', '0002_auto_20190509_2114'),
    ]

    operations = [
        migrations.AlterField(
            model_name='award',
            name='recipient_email',
            field=models.CharField(max_length=120, verbose_name='recipient email'),
        ),
        migrations.AlterField(
            model_name='award',
            name='recipient_fname',
            field=models.CharField(max_length=120, verbose_name='recipient first name'),
        ),
        migrations.AlterField(
            model_name='award',
            name='recipient_lname',
            field=models.CharField(default=None, max_length=120, verbose_name='recipient last name'),
        ),
    ]
