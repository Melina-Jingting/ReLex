from django.db import models

# Create your models here.
from django.db import models

# Create your models here.


class Profile(models.Model):
    linkedin_url = models.TextField()
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255, null=True, blank=True)
    scraped_at_ts = models.DateTimeField(default=None, blank=True, null=True)
    about = models.TextField()


class Accomplishment(models.Model):
    profile = models.ForeignKey(Profile, default=-1, on_delete=models.CASCADE)
    category = models.CharField(max_length=255)
    title = models.CharField(max_length=255)


class Certification(models.Model):
    profile = models.ForeignKey(Profile, default=-1, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    url = models.URLField(null=True, blank=True)
    issuing_authority = models.CharField(max_length=255, null=True, blank=True)
    issued_date = models.DateField(null=True, blank=True)
    expiry_date = models.DateField(null=True, blank=True)
    credential_id = models.CharField(max_length=255, null=True, blank=True)


class Education(models.Model):
    profile = models.ForeignKey(Profile, default=-1, on_delete=models.CASCADE)
    university = models.CharField(max_length=255)
    from_date = models.DateField(null=True, blank=True)
    to_date = models.DateField(null=True, blank=True)
    degree = models.CharField(max_length=255, null=True, blank=True)
    field = models.CharField(max_length=255, null=True, blank=True)
    activities = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    level = models.IntegerField(default=0)


class Experience(models.Model):
    profile = models.ForeignKey(Profile, default=-1, on_delete=models.CASCADE)
    company = models.CharField(max_length=255)
    from_date = models.DateField(null=True, blank=True)
    to_date = models.DateField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    title = models.CharField(max_length=255)
    duration = models.DurationField(null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    level = models.IntegerField(default=0)
    currently_here = models.BooleanField(default=False)


class Interest(models.Model):
    profile = models.ForeignKey(Profile, default=-1, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)


class Recommendation(models.Model):
    recommender_profile = models.ForeignKey(
        Profile, default=-1, on_delete=models.CASCADE, related_name='recommender_profile')
    recipient_profile = models.ForeignKey(
        Profile, default=-1, on_delete=models.CASCADE,  related_name='recipient_profile')
    text = models.TextField()


class Skill(models.Model):
    profile = models.ForeignKey(Profile, default=-1, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    endorsements = models.IntegerField(null=True, blank=True)


class Volunteer_experience(models.Model):
    profile = models.ForeignKey(Profile, default=-1, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    from_date = models.DateField(null=True, blank=True)
    to_date = models.DateField(null=True, blank=True)
    duration = models.DurationField(null=True, blank=True)
    cause = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    level = models.IntegerField(default=0)


class Company(models.Model):
    name = models.CharField(max_length=255)
    industry = models.CharField(max_length=255, null=True, blank=True)
