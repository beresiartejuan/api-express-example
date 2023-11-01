import { Schema, model } from "mongoose";

const InmuebleSchema = new Schema({
    piso: { type: Schema.Types.Number, min: 0 },
    letra: { type: Schema.Types.String },
    extension: { type: Schema.Types.Decimal128 },
    numero_de_habitaciones: { type: Schema.Types.Number, default: 1, min: 1 },
    alquilado: { type: Schema.Types.Boolean, default: false },
    nombre_del_propietario: { type: Schema.Types.String },
    email: { type: Schema.Types.String }
}, {
    timeseries: false,
    timestamps: false,
    collection: "Inmuebles"
});

InmuebleSchema.static("findByEmail", async function (email = "") {
    return await this.find({ email });
});

InmuebleSchema.static("findByPropietario", async function (nombre_del_propietario = "") {
    return await this.find({ nombre_del_propietario });
});

const Inmueble = model("Inmueble", InmuebleSchema);

export default Inmueble;