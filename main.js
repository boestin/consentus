                    if (typeof console !== "undefined" && console.warn) {
                        console.warn("Unsupported multisig UTXO type; using generic input");
                    }
                    this._fromNonP2SH(utxo);
                    return;
