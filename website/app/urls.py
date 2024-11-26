from django.urls import path
from . import views 

urlpatterns = [
    path(route="", view=views.home_view, name="homePage"),
    path(route="aboutme", view=views.about_me, name="about-me"),
    path(route="image viewers", view=views.image, name="image"),
    path(route="see more", view=views.see_more, name="see more"),
    
    
    path(route="<str:link>/", 
         view=views.redirect_home,
         name="redirectHome")
]
