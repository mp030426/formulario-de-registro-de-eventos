from django.contrib import admin
# Update the import path below if your models are in a different app (e.g., entidad.models)
from .models import Usuario, Organizador,Evento

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('id','nombre_usu')
class EventoAdmin(admin.ModelAdmin):
    list_display = ('codigo_evento','nombre_del_evento','fecha','ubicacion','organizador')
admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(Evento, EventoAdmin)
admin.site.register(Organizador) 
# Register your models here.

