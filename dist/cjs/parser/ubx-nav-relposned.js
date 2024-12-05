"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UBX_NAV_RELPOSNED_Parser = void 0;
var Utils_1 = require("ubx-parser/dist/cjs/Utils");
var PacketParser_1 = require("ubx-parser/dist/cjs/PacketParser");
var UBX_NAV_RELPOSNED_Parser = /** @class */ (function (_super) {
    __extends(UBX_NAV_RELPOSNED_Parser, _super);
    function UBX_NAV_RELPOSNED_Parser() {
        return _super.call(this, 0x01, 0x3c) || this;
    }
    UBX_NAV_RELPOSNED_Parser.prototype.parse = function (payload) {
        return {
            refStationID: payload.readUInt32LE(2),
            iTOW: payload.readUInt32LE(4),
            relPosN: payload.readInt32LE(8),
            relPosE: payload.readInt32LE(12),
            relPosD: payload.readInt32LE(16),
            relPosLength: payload.readInt32LE(20),
            relPosHeading: payload.readUInt32LE(24),
            relPosHPN: payload.readInt32LE(32),
            relPosHPE: payload.readInt32LE(33),
            relPosHPD: payload.readInt32LE(34),
            relPosHPLen: payload.readInt32LE(35),
            accN: payload.readUInt32LE(36),
            accE: payload.readUInt32LE(40),
            accD: payload.readUInt32LE(44),
            accLength: payload.readUInt32LE(48),
            accHeading: payload.readUInt32LE(52),
            diffFixOK: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(60), 0) == 1,
            diffSoln: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(60), 1) == 1,
            relPosValid: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(60), 2) == 1,
            carrSoln: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(60), 4, 3),
            isMoving: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(60), 5) == 1,
            relPosHeadingValid: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(60), 8) == 1,
            relPosHeadingNormalized: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(60), 9) == 1,
            // year: payload.readUInt16LE(4),
            // month: payload.readUInt8(6),
            // day: payload.readUInt8(7),
            // hour: payload.readUInt8(8),
            // min: payload.readUInt8(9),
            // sec: payload.readUInt8(10),
            // validDate: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(11), 0) == 1,
            // validTime: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(11), 1) == 1,
            // fullyResolved: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(11), 2) == 1,
            // validMag: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(11), 3) == 1,
            // tAcc: payload.readUInt32LE(12),
            // nano: payload.readInt32LE(16),
            // fixType: payload.readUInt8(20),
            // gnssFixOK: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(21), 0) == 1,
            // diffSoln: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(21), 1) == 1,
            // psmState: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(21), 2, 3),
            // headVehValid: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(21), 5) == 1,
            // carrSoln: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(21), 6, 2),
            // confirmedAvai: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(22), 5) == 1,
            // confirmedDate: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(22), 6) == 1,
            // confirmedTime: (0, Utils_1.readBitFromUInt8)(payload.readUInt8(22), 7) == 1,
            // numSV: payload.readUInt8(23),
            // lon: payload.readInt32LE(24) * 1e-7,
            // lat: payload.readInt32LE(28) * 1e-7,
            // height: payload.readInt32LE(32),
            // hMSL: payload.readInt32LE(36),
            // hAcc: payload.readUInt32LE(40),
            // vAcc: payload.readUInt32LE(44),
            // velN: payload.readInt32LE(48),
            // velE: payload.readInt32LE(52),
            // velD: payload.readInt32LE(56),
            // gSpeed: payload.readInt32LE(60),
            // headMot: payload.readInt32LE(64) * 1e-5,
            // sAcc: payload.readUInt32LE(68),
            // headAcc: payload.readUInt32LE(72) * 1e-5,
            // pDOP: payload.readUInt16LE(76) * 0.01,
            // invalidLlh: (0, Utils_1.readBitFromUInt16)(payload.readUInt16LE(78), 0) == 1,
            // lastCorrectionAge: (0, Utils_1.readBitFromUInt16)(payload.readUInt16LE(78), 1, 4),
            // headVeh: payload.readInt32LE(84) * 1e-5,
            // magDec: payload.readInt16LE(88) * 1e-2,
            // magAcc: payload.readUInt16LE(90) * 1e-2,
        };
    };
    return UBX_NAV_RELPOSNED_Parser;
}(PacketParser_1.PacketParser));
exports.UBX_NAV_RELPOSNED_Parser = UBX_NAV_RELPOSNED_Parser;
