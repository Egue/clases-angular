export interface Pago
{
    //campos que devuelve el api
    id:number;
    fecha_recaudo:string,
    hora_recaudo: string;
    id_transaccion: string;
    cc_asesor:string;
    nombre_asesor:string;
    codigo_pto_vta:string;
    nombre_pto_vta:string;
    nombre_convenio:string;
    numero_referencia:string;
    valor_total:string;
    cc_cliente:string;
    nombre_cliente:string;
    estado_descargue:string;
    reversado:string;
    comentario_reversado:string;
    fecha_reversado: string;
    created_at:string;
    updated_at:string;
}

/*"id": 1,
            "fecha_recaudo": "2021-09-01",
            "hora_recaudo": "19:02:42",
            "id_transaccion": "212812232",
            "cc_asesor": "1052382736",
            "nombre_asesor": "ANA ISABEL MARTINEZ PINEDA",
            "codigo_pto_vta": "8204",
            "nombre_pto_vta": "4 LA BENDICION",
            "nombre_convenio": "CABLE Y TV YOPAL MAYOR A 40001",
            "numero_referencia": "47723A1118556845",
            "valor_total": 45100,
            "cc_cliente": "1118556845",
            "nombre_cliente": "ARENAS  CORZO TANIA YANIXSA",
            "estado_descargue": 0,
            "reversado": 0,
            "comentario_reversado": null,
            "fecha_reversado": null,
            "created_at": null,
            "updated_at": null */