"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { useState } from "react"

export default function ContactForm() {
//javascript  creado por juan hernandez para que el formulario pueda enviar datos en nextjs
  const [receiveNotifications, setReceiveNotifications] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
    tipoNotificacion: "all",
  })
  const [resumen, setResumen] = useState("")

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleRadioChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      tipoNotificacion: value,
    }))
  }

  const resumirMensaje= (Texto) => {
    const firstSentence = Texto.split(/[.!?]/, 1)[0]
    const words = Texto.split(" ")

    let resumenTexto = ""

    if (words.length > 20) {
      resumenTexto = `${words.slice(0, 15).join(" ")}... (${words.length} words total)`
    } else {
      resumenTexto = Texto
    }

    return resumenTexto
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const resumenFinal = resumirMensaje(formData.mensaje)
    setResumen(resumenFinal)

    setDialogOpen(true)


  }

  return (
    <div className="w-lg mx-auto p-6 bg-card Texto-card-foreground rounded-lg absolute top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%]">
      <h2 className="Texto-2xl font-bold mb-6">Formulario de Contacto</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre</Label>
          <Input id="nombre" placeholder="Tu nombre" required value={formData.nombre} onChange={handleChange} 
           pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,50}$"
            title="El nombre debe contener solo letras y espacios (2-50 caracteres)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            required
            value={formData.email}
            onChange={handleChange}
             pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
            title="Por favor escribe un correo electrónico válido"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensaje">Mensaje</Label>
          <Textarea
            id="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            className="min-h-[120px]"
            required
            value={formData.mensaje}
            onChange={handleChange}
            minLength={10}
            title="El mensaje debe tener al menos 10 caracteres"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="notificaciones"
            checked={receiveNotifications}
            onCheckedChange={(checked) => {
              setReceiveNotifications(checked)
            }}
          />
          <Label
            htmlFor="notificaciones"
            className="Texto-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Recibir notificaciones
          </Label>
        </div>

        {receiveNotifications && (
          <div className="pl-6 space-y-2">
            <Label className="Texto-sm font-medium">Tipo de notificaciones</Label>
            <RadioGroup defaultValue="all" value={formData.tipoNotificacion} onValueChange={handleRadioChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all">Todas las notificaciones</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="important" id="important" />
                <Label htmlFor="important">Solo notificaciones importantes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weekly" id="weekly" />
                <Label htmlFor="weekly">Resumen semanal</Label>
              </div>
            </RadioGroup>
          </div>
        )}

        <Button type="submit" className="w-full">
          Enviar mensaje
        </Button>
      </form>

      
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Mensaje Enviado</DialogTitle>
            <DialogDescription>Tu mensaje ha sido enviado exitosamente.</DialogDescription>
          </DialogHeader>

          <div className="p-4 my-4 bg-muted rounded-md border">
            <h3 className="font-medium mb-2">Resumen del mensaje:</h3>
            <p className="Texto-sm">{resumen}</p>

            <div className="mt-4 Texto-sm Texto-muted-foreground">
              <p>
                <strong>Nombre:</strong> {formData.nombre}
              </p>
              <p>
                <strong>Email:</strong> {formData.email}
              </p>
              {receiveNotifications && (
                <p>
                  <strong>Notificaciones:</strong>{" "}
                  {formData.tipoNotificacion === "all"
                    ? "Todas"
                    : formData.tipoNotificacion === "important"
                      ? "Solo importantes"
                      : "Resumen semanal"}
                </p>
              )}
            </div>
          </div>

          <DialogFooter>
            <Button onClick={() => setDialogOpen(false)}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

