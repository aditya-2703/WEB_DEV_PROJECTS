# Generated by Django 3.1.7 on 2021-04-15 11:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='U_course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=122)),
                ('course', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='U_database',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=122)),
                ('fname', models.CharField(max_length=122)),
                ('lname', models.CharField(max_length=122)),
            ],
        ),
        migrations.CreateModel(
            name='U_department',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=122)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('department', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='U_feedback',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=122)),
                ('message', models.TextField()),
                ('phone', models.CharField(max_length=12)),
                ('location', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='U_shopping',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=122)),
                ('shopping', models.TextField()),
            ],
        ),
    ]
