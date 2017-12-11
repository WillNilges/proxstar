$("#delete-vm").click(function(){
    const vmname = $(this).data('vmname')
    swal({
        title: `Are you sure you want to delete ${vmname}?`,
        icon: "warning",
        buttons: {
            cancel: true,
            delete: {
                text: "Delete",
                closeModal: false,
                className: "swal-button--danger",
            }
        },
        dangerMode: true,
    })
    .then((willDelete) => {
        if (willDelete) {
            const vmid = $(this).data('vmid')
            fetch(`/proxstar/vm/${vmid}/delete`, {
                credentials: 'same-origin',
                method: 'post'
            }).then((response) => {
                return swal(`${vmname} has been deleted!`, {
                    icon: "success",
                });
            }).then(() => {
                window.location = "/proxstar";
            }).catch(err => {
                if (err) {
                    swal("Uh oh...", `Unable to delete ${vmname}. Please try again later.`, "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
        }
    });
});

$("#stop-vm").click(function(){
    const vmname = $(this).data('vmname')
    swal({
        title: `Are you sure you want to stop ${vmname}?`,
        icon: "warning",
        buttons: {
            cancel: true,
            delete: {
                text: "Stop",
                closeModal: false,
                className: "swal-button--danger",
            }
        },
        dangerMode: true,
    })
    .then((willStop) => {
        if (willStop) {
            const vmid = $(this).data('vmid')
            fetch(`/proxstar/vm/${vmid}/power/stop`, {
                credentials: 'same-origin',
                method: 'post'
            }).then((response) => {
                return swal(`${vmname} is now stopping!`, {
                    icon: "success",
                });
            }).then(() => {
                window.location = `/proxstar/vm/${vmid}`;
            }).catch(err => {
                if (err) {
                    swal("Uh oh...", `Unable to stop ${vmname}. Please try again later.`, "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
        }
    });
});

$("#reset-vm").click(function(){
    const vmname = $(this).data('vmname')
    swal({
        title: `Are you sure you want to reset ${vmname}?`,
        icon: "warning",
        buttons: {
            cancel: true,
            delete: {
                text: "Reset",
                closeModal: false,
                className: "swal-button--danger",
            }
        },
        dangerMode: true,
    })
    .then((willReset) => {
        if (willReset) {
            const vmid = $(this).data('vmid')
            fetch(`/proxstar/vm/${vmid}/power/reset`, {
                credentials: 'same-origin',
                method: 'post'
            }).then((response) => {
                return swal(`${vmname} is now resetting!`, {
                    icon: "success",
                });
            }).then(() => {
                window.location = `/proxstar/vm/${vmid}`;
            }).catch(err => {
                if (err) {
                    swal("Uh oh...", `Unable to reset ${vmname}. Please try again later.`, "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
        }
    });
});

$("#shutdown-vm").click(function(){
    const vmname = $(this).data('vmname')
    swal({
        title: `Are you sure you want to shutdown ${vmname}?`,
        icon: "warning",
        buttons: {
            cancel: true,
            delete: {
                text: "Shutdown",
                closeModal: false,
                className: "swal-button--danger",
            }
        },
        dangerMode: true,
    })
    .then((willShutdown) => {
        if (willShutdown) {
            const vmid = $(this).data('vmid')
            fetch(`/proxstar/vm/${vmid}/power/shutdown`, {
                credentials: 'same-origin',
                method: 'post'
            }).then((response) => {
                return swal(`${vmname} is now shutting down!`, {
                    icon: "success",
                });
            }).then(() => {
                window.location = `/proxstar/vm/${vmid}`;
            }).catch(err => {
                if (err) {
                    swal("Uh oh...", `Unable to shutdown ${vmname}. Please try again later.`, "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
        }
    });
});

$("#suspend-vm").click(function(){
    const vmname = $(this).data('vmname')
    swal({
        title: `Are you sure you want to suspend ${vmname}?`,
        icon: "warning",
        buttons: {
            cancel: true,
            delete: {
                text: "Suspend",
                closeModal: false,
                className: "swal-button--danger",
            }
        },
        dangerMode: true,
    })
    .then((willSuspend) => {
        if (willSuspend) {
            const vmid = $(this).data('vmid')
            fetch(`/proxstar/vm/${vmid}/power/suspend`, {
                credentials: 'same-origin',
                method: 'post'
            }).then((response) => {
                return swal(`${vmname} is now suspending!`, {
                    icon: "success",
                });
            }).then(() => {
                window.location = `/proxstar/vm/${vmid}`;
            }).catch(err => {
                if (err) {
                    swal("Uh oh...", `Unable to suspend ${vmname}. Please try again later.`, "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
        }
    });
});

$("#start-vm").click(function(){
    const vmname = $(this).data('vmname')
    const vmid = $(this).data('vmid')
    fetch(`/proxstar/vm/${vmid}/power/start`, {
        credentials: 'same-origin',
        method: 'post'
    }).then((response) => {
        return swal(`${vmname} is now starting!`, {
            icon: "success",
        }); 
    }).then(() => {
        window.location = `/proxstar/vm/${vmid}`;
    }).catch(err => {
        if (err) {
            swal("Uh oh...", `Unable to start ${vmname}. Please try again later.`, "error");
        } else {
            swal.stopLoading();
            swal.close();
        }
    });
});

$("#resume-vm").click(function(){
    const vmname = $(this).data('vmname')
    const vmid = $(this).data('vmid')
    fetch(`/proxstar/vm/${vmid}/power/resume`, {
        credentials: 'same-origin',
        method: 'post'
    }).then((response) => {
        return swal(`${vmname} is now resuming!`, {
            icon: "success",
        }); 
    }).then(() => {
        window.location = `/proxstar/vm/${vmid}`;
    }).catch(err => {
        if (err) {
            swal("Uh oh...", `Unable to resume ${vmname}. Please try again later.`, "error");
        } else {
            swal.stopLoading();
            swal.close();
        }
    });
});

$("#eject-iso").click(function(){
    const vmid = $(this).data('vmid')
    const iso = $(this).data('iso')
    swal({
        title: `Are you sure you want to eject ${iso}?`,
        icon: "warning",
        buttons: {
            cancel: {
                text: "Cancel",
                visible: true,
                closeModal: true,
                className: "",
            },
            eject: {
                text: "Eject",
                closeModal: false,
                className: "swal-button--danger",
            }
        },
        dangerMode: true,
    })
    .then((willEject) => {
        if (willEject) {
            const vmid = $(this).data('vmid')
            fetch(`/proxstar/vm/${vmid}/eject`, {
                credentials: 'same-origin',
                method: 'post'
            }).then((response) => {
                return swal(`${iso} is now ejecting!`, {
                    icon: "success",
                    buttons: {
                        ok: {
                            text: "OK",
                            closeModal: true,
                            className: "",
                        }
                    }
                });
            }).then(() => {
                window.location = `/proxstar/vm/${vmid}`;
            }).catch(err => {
                if (err) {
                    swal("Uh oh...", `Unable to eject ${iso}. Please try again later.`, "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
        }
    });
});


$("#change-iso").click(function(){
    const vmid = $(this).data('vmid')
    fetch(`/proxstar/isos`, {
        credentials: 'same-origin',
    }).then((response) => {
        return response.text()
    }).then((text) => {
        var isos = text.split(',');
        var iso_list = document.createElement('select');
        for (i = 0; i < isos.length; i++) {
            iso_list.appendChild(new Option(isos[i], isos[i]));
        }
        swal({
            title: 'Choose an ISO to mount:',
            content: iso_list,
            buttons: {
                cancel: {
                    text: "Cancel",
                    visible: true,
                    closeModal: true,
                    className: "",
                },
                select: {
                    text: "Select",
                    closeModal: false,
                    className: "swal-button--danger",
                }
            },
            dangerMode: true,
        })
        .then((willChange) => {
            if (willChange) {
                const vmid = $(this).data('vmid')
                const iso = $(iso_list).val()
                fetch(`/proxstar/vm/${vmid}/mount/${iso}`, {
                    credentials: 'same-origin',
                    method: 'post'
                }).then((response) => {
                    return swal(`${iso} is now being mounted!`, {
                        icon: "success",
                        buttons: {
                            ok: {
                                text: "OK",
                                closeModal: true,
                                className: "",
                            }
                        }
                    });
                }).then(() => {
                    window.location = `/proxstar/vm/${vmid}`;
                }).catch(err => {
                    if (err) {
                        swal("Uh oh...", `Unable to mount ${iso}. Please try again later.`, "error");
                    } else {
                        swal.stopLoading();
                        swal.close();
                    }
                });
            }
       });
    }).catch(err => {
        if (err) {
            swal("Uh oh...", `Unable to retrieve available ISOs. Please try again later.`, "error");
        } else {
            swal.stopLoading();
            swal.close();
        }
    });
});

$("#renew-vm").click(function(){
    const vmname = $(this).data('vmname')
    const vmid = $(this).data('vmid')
    fetch(`/proxstar/vm/${vmid}/renew`, {
        credentials: 'same-origin',
        method: 'post'
    }).then((response) => {
        return swal(`${vmname} has been renewed!`, {
            icon: "success",
        });
    }).then(() => {
        window.location = `/proxstar/vm/${vmid}`;
    }).catch(err => {
        if (err) {
            swal("Uh oh...", `Unable to renew ${vmname}. Please try again later.`, "error");
        } else {
            swal.stopLoading();
            swal.close();
        }
    });
});

$("#create-vm").click(function(){
    const name = document.getElementById('name').value
    const cores = document.getElementById('cores').value
    const mem = document.getElementById('mem').value
    const disk = document.getElementById('disk').value
    const iso = document.getElementById('iso').value
    if (name && disk) {
        fetch(`/proxstar/hostname/${name}`, {
            credentials: 'same-origin',
        }).then((response) => {
            return response.text()
        }).then((text) => {
            if (text == 'ok') {
                var loader = document.createElement('div');
                loader.setAttribute('class', 'loader');
                var info = document.createElement('span');
                info.innerHTML = `Cores: ${cores}<br>Memory: ${mem/1024} GB<br>Disk: ${disk} GB<br>ISO: ${iso}`,
                swal({
                    title: `Are you sure you want to create ${name}?`,
                    content: info,
                    icon: "info",
                    buttons: {
                        cancel: true,
                        create: {
                            text: "Create",
                            closeModal: false,
                            className: "swal-button",
                        }
                    }
                })
                .then((willCreate) => {
                    if (willCreate) {
                        var data  = new FormData();
                        data.append('name', name);
                        data.append('cores', cores);
                        data.append('mem', mem);
                        data.append('disk', disk);
                        data.append('iso', iso);
                        fetch('/proxstar/vm/create', {
                            credentials: 'same-origin',
                            method: 'post',
                            body: data
                        }).then((response) => {
                            return response.text()
                        }).then((vmid) => {
                            window.location = `/proxstar/vm/${vmid}`;
                        });
                    }
                });
            } else if (text == 'invalid') {
                swal("Uh oh...", `That name is not a valid name! Please try another name.`, "error");
            } else if (text == 'taken') {
                swal("Uh oh...", `That name is not available! Please try another name.`, "error");
            }
        }).catch(err => {
            if (err) {
                swal("Uh oh...", `Unable to verify name. Please try again later.`, "error");
            } else {
                swal.stopLoading();
                swal.close();
            }
        });
    } else if (!name && !disk) {
        swal("Uh oh...", `You must enter a name and disk size for your VM!`, "error");
    } else if (!name) {
        swal("Uh oh...", `You must enter a name for your VM!`, "error");
    } else if (!disk) {
        swal("Uh oh...", `You must enter a disk size for your VM!`, "error");
    }
});

$("#change-cores").click(function(){
    const vmid = $(this).data('vmid')
    const cur_cores = $(this).data('cores')
    const usage = $(this).data('usage')
    const limit = $(this).data('limit')
    var core_list = document.createElement('select');
    core_list.setAttribute('style', 'width: 25px');
    for (i = 1; i < limit - usage + 1; i++) {
        core_list.appendChild(new Option(i, i));
    }
    swal({
        title: 'Select how many cores you would like to allocate to this VM:',
        content: core_list,
        buttons: {
            cancel: {
                text: "Cancel",
                visible: true,
                closeModal: true,
                className: "",
            },
            select: {
                text: "Select",
                closeModal: false,
                className: "swal-button",
            }
        },
    })
    .then((willChange) => {
        if (willChange) {
            const cores = $(core_list).val()
            fetch(`/proxstar/vm/${vmid}/cpu/${cores}`, {
                credentials: 'same-origin',
                method: 'post'
            }).then((response) => {
                return swal(`Now applying the change to the number of cores!`, {
                    icon: "success",
                    buttons: {
                        ok: {
                            text: "OK",
                            closeModal: true,
                            className: "",
                        }
                    }
                });
            }).then(() => {
                window.location = `/proxstar/vm/${vmid}`;
            });
        }
    }).catch(err => {
        if (err) {
            swal("Uh oh...", `Unable to change the number of cores. Please try again later.`, "error");
        } else {
            swal.stopLoading();
            swal.close();
        }
    });
});

$("#change-mem").click(function(){
    const vmid = $(this).data('vmid')
    const cur_mem = $(this).data('mem')
    const usage = $(this).data('usage')
    const limit = $(this).data('limit')
    var mem_list = document.createElement('select');
    mem_list.setAttribute('style', 'width: 45px');
    for (i = 1; i < limit - usage + 1; i++) {
        mem_list.appendChild(new Option(`${i}GB`, i));
    }
    swal({
        title: 'Select how much memory you would like to allocate to this VM:',
        content: mem_list,
        buttons: {
            cancel: {
                text: "Cancel",
                visible: true,
                closeModal: true,
                className: "",
            },
            select: {
                text: "Select",
                closeModal: false,
                className: "swal-button",
            }
        },
    })
    .then((willChange) => {
        if (willChange) {
            const mem = $(mem_list).val()
            fetch(`/proxstar/vm/${vmid}/mem/${mem}`, {
                credentials: 'same-origin',
                method: 'post'
            }).then((response) => {
                return swal(`Now applying the change to the amount of memory!`, {
                    icon: "success",
                    buttons: {
                        ok: {
                            text: "OK",
                            closeModal: true,
                            className: "",
                        }
                    }
                });
            }).then(() => {
                window.location = `/proxstar/vm/${vmid}`;
            });
        }
    }).catch(err => {
        if (err) {
            swal("Uh oh...", `Unable to change the amount of memory. Please try again later.`, "error");
        } else {
            swal.stopLoading();
            swal.close();
        }
    });
});
