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

class Company(models.Model):
    name = models.CharField(max_length=255)
    website = models.URLField(null=True, blank=True)
    size = models.TextField(null=True, blank=True)
    company_type = models.CharField(max_length=255, null=True, blank=True)
    revenue = models.CharField(max_length=255, null=True, blank=True)
    headquarters = models.CharField(max_length=255, null=True, blank=True)
    founded = models.DateField(null=True, blank=True)
    industry = models.CharField(max_length=255, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    scraped = models.BooleanField(default=False)

class Accomplishment(models.Model):
    profile = models.ForeignKey(Profile, default=-1, on_delete=models.CASCADE)
    category = models.CharField(max_length=255)
    title = models.CharField(max_length=255)


class Certification(models.Model):
    profile = models.ForeignKey(Profile, default=-1, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    url = models.TextField(null=True, blank=True)
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
    company = models.ForeignKey(Company, default=7, on_delete=models.CASCADE)
    company_name = models.CharField(max_length=255)
    from_date = models.DateField(null=True, blank=True)
    to_date = models.DateField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    title = models.CharField(max_length=255)
    duration = models.DurationField(null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    level = models.IntegerField(default=0)
    currently_here = models.BooleanField(default=False)
    profile = models.ForeignKey(Profile, default=-1, on_delete=models.CASCADE)



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
    currently_here = models.BooleanField(null=True, blank=True)


class Competitors(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='company')
    competitor = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='competitor')

class FAQ(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    role = models.CharField(max_length=255, default='general')
    question = models.TextField()
    answer = models.TextField()
    data = models.DateField()

class Company_Reviews(models.Model):
    date = models.DateField()
    employee_title = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    employee_status = models.CharField(max_length=255)
    review_title = models.CharField(max_length=255)
    helpful = models.IntegerField()
    pros = models.TextField(null=True, blank=True)
    cons = models.TextField(null=True, blank=True)
    advice_to_management = models.TextField(null=True, blank=True)
    rating_overall = models.FloatField()
    rating_balance = models.IntegerField()
    rating_culture = models.IntegerField()
    rating_career = models.IntegerField()
    rating_compensation = models.IntegerField()
    rating_management = models.IntegerField()
    recommends = models.BooleanField()
    outlook = models.CharField(max_length=50)
    approves_of_CEO = models.CharField(max_length=50)

class Salary(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    role = models.CharField(max_length=255)
    average_total_pay = models.CharField(max_length=255)
    base_pay = models.CharField(max_length=255, null=True, blank=True)
    additional_pay = models.CharField(max_length=255, null=True, blank=True)
    based_on = models.IntegerField(null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)

class Specialty(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
