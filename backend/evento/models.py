from django.db import models


class Organizador(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre


class Evento(models.Model):
    codigo_evento = models.CharField(max_length=50, unique=True)
    nombre_del_evento = models.CharField(max_length=200)
    fecha = models.DateField()
    ubicacion = models.CharField(max_length=200)
    organizador = models.ForeignKey(Organizador, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre_del_evento} - {self.codigo_evento}"
