class RestfulModel:
    __PATCH__ = []

    def update_from_form(self, form):
        for key in self.__PATCH__:
            value = form.get(key, None)
            if value:
                setattr(self, key, value)
        self.after_update()

    def update(self, **kwargs):
        self.update_from_form(kwargs)

    def after_update(self):
        pass