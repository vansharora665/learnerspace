# Generated by Django 5.2.3 on 2025-07-09 14:03

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='video',
            name='video_file',
            field=models.FileField(default=django.utils.timezone.now, upload_to='videos/'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='video',
            name='description',
            field=models.TextField(),
        ),
        migrations.AlterField(
            model_name='video',
            name='title',
            field=models.CharField(max_length=100),
        ),
    ]
