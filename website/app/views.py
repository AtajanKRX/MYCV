from django.shortcuts import render
from django import http
from django.urls import reverse
import os

def home_view(request):
    return render(request=request, template_name="app/a.html")

def about_me(request):
    return render(request=request, template_name="app/a.html")

def image(request):
    return render(request=request, template_name="app/image viewer.html")

def see_more(request):
    return render(request=request, template_name="app/see.html")


def redirect_home(request, link):
    lowercase_link = link.lower().strip()
    links = ["home-page", "homepage", "0", "home page", "home", "about", "aboutme", "about_me", "1"]

    if(lowercase_link in links):
        homePage = reverse(viewname="homePage")
        return http.HttpResponseRedirect(redirect_to=homePage)
    
    elif(lowercase_link in links):
        aboutme = reverse(viewname="about-me")
        return http.HttpResponseRedirect(redirect_to=aboutme)

    else:
    
        A = {
                "title"     : f"{link} not found",
                "mesage"    : f'''{link} was not found.
                                   In order to go to the home page, just write the domain Ip''',
                "domainIP"  : f"(https://127.0.0.1:8000)"
            }
 

    return render(request=request,
                  template_name = "app/404.html",
                  context=A)