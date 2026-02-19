from django.db import models



class Usuario(models.Model):
    nombre_usu = models.CharField(max_length=100)
    contraseña = models.CharField(max_length=100)

    def __str__(self):
        return str(self.nombre_usu)+" - "+str(self.contraseña)

class Organizador(models.Model):
    nombre = models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return str(self.nombre)
    

class Evento(models.Model):
    codigo_evento = models.CharField(max_length=50, unique=True)
    nombre_del_evento = models.CharField(max_length=200)
    fecha = models.DateField()
    ubicacion = models.CharField(max_length=200)
    organizador = models.ForeignKey(Organizador, on_delete=models.CASCADE)
        
    def __str__(self):# Retorna una cadena representativa del evento
      return str(self.nombre_del_evento) + " - " + str(self.codigo_evento) + " - " + str(self.fecha) + " - " + str(self.ubicacion) + " - " + str(self.organizador.nombre)






# Create your models here.
