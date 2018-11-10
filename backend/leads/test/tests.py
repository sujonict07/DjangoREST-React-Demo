from django.test import TestCase
from faker import Factory

# Create your tests here.

fake = Factory.create()

class LeadModelTest(TestCase):
    def SetUp(self):
        Lead.objects.create(
                name=fake.name(),
                email=fake.email(),
                phone=fake.phone_number(),
                message=fake.text()
                )

    def test_save_model(self):
        save_models = Lead.objects.count()
        self.assertEqual(save_models,2)
