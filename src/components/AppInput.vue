<template>
  <div class="container-input">
    <p> {{ label }} </p>
    <q-input
      outlined
      v-if="type !== 'number'"
      ref="input"
      :disable="disable"
      :readonly="readonly"
      :required="required"
      :type="type"
      :autofocus="autofocus"
      :placeholder="placeholder"
      v-model="input"
      @update:model-value="$emit('update:model-value', input)"
      class="container-input__input"
      dense
      :mask="mask"
      :rules="rules ? rules : ['']"
    >
      <template v-slot:prepend>
        <q-icon
          v-if="iconNamePrepend"
          :name="iconNamePrepend"
          class="container-input__input__prepend"
          @click="clickPrepend()"
          :color="colorPropPrepend"
        />
      </template>
      <template v-slot:append>
        <q-icon
          v-if="iconNameAppend"
          :name="iconNameAppend"
          class="container-input__input__append"
          @click="clickAppend()"
          :color="colorPropAppend"
        />
        <q-icon
          name="fas fa-calendar-alt"
          v-if="isDate"
        >
          <q-popup-proxy
            transition-show="scale"
            transition-hide="scale"
            ref="qPopupProxy"
          >
            <q-date
              mask="DD/MM/YYYY"
              v-model="input"
              :locale="locale"
              :options="optionsDate"
            >
              <div class="row items-center justify-end">
                <q-btn
                  v-close-popup
                  :label="$t('components.appInput.labelClose')"
                  color="primary"
                  flat
                />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
    <q-input
      v-if="type === 'number'"
      ref="input"
      outlined
      :placeholder="placeholder"
      :disable="disable"
      :readonly="readonly"
      :required="required"
      :type="type"
      :autofocus="autofocus"
      v-model.number="input"
      @update:model-value="$emit('update:model-value', input)"
      class="container-input__input"
      dense
      :mask="mask"
      :rules="rules ? rules : ['']"
      @keypress="emitkeypress($event)"
    >
    <template v-slot:prepend>
      <q-icon
        v-if="iconNamePrepend"
        :name="iconNamePrepend"
        class="container-input__input__prepend"
        @click="clickPrepend()"
      />
    </template>
    <template v-slot:append>
      <q-icon
        v-if="iconNameAppend"
        :name="iconNameAppend"
        class="container-input__input__append"
        @click="clickAppend()"
      />
    </template>
    </q-input>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { getLocaleAppData, moment } from 'src/util/Moment.js'

export default defineComponent({
  name: 'InputComponent',
  components: {
  },
  props: {
    label: {
      type: String,
      default: () => ''
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    type: {
      type: String,
      defaul: () => ''
    },
    disable: {
      type: Boolean,
      default: () => false
    },
    readonly: {
      type: Boolean,
      default: () => false
    },
    autofocus: {
      type: Boolean,
      default: () => false
    },
    iconNamePrepend: {
      type: String,
      default: () => ''
    },
    colorPropPrepend: {
      type: String,
      default: () => ''
    },
    iconNameAppend: {
      type: String,
      default: () => ''
    },
    colorPropAppend: {
      type: String,
      default: () => ''
    },
    modelValue: {
      type: [String, Number],
      default: () => null
    },
    rules: {
      type: Array,
      default: () => null
    },
    required: {
      type: Boolean,
      default: false
    },
    mask: {
      type: String,
      default: ''
    },
    isDate: {
      type: Boolean,
      default: () => false
    },
    isPassword: {
      type: Boolean,
      default: () => false
    }
  },
  data () {
    return {
      input: null,
      locale: getLocaleAppData()
    }
  },
  created () {
    this.input = this.modelValue
  },
  methods: {
    clickPrepend () {
      this.$emit('click:icon-prepend')
    },
    clickAppend () {
      this.$emit('click:icon-append')
    },
    emitkeypress ($event, type) {
      if (type === 'number') {
        if (/^[\d]|Backspace|Enter|Arrow.*|Shift|Home|End$/.test($event.key)) {
          return
        }
        $event.preventDefault()
      }
    },
    optionsDate (date) {
      return date <= moment(new Date(), '').format('YYYY/MM/DD')
    }
  },
  watch: {
    modelValue () {
      if (this.modelValue === null) {
        this.input = undefined
        return
      }
      this.input = this.modelValue
    },
    input (value) {
      if (this.isPassword) {
        return
      }
      if (this.isDate) {
        this.$emit('input:data', value)
      }
      this.input = value.toUpperCase()
      this.$emit('update:model-value', this.input)
    }
  }
})
</script>

<style
  lang='scss'
  scoped
>
.q-field--filled .q-field__control {
  border-radius: 0;
}

.container-input {
  width: 100%;

  &__label {
    color: #545454;
    font-weight: 400;
    padding: 5px;
  }

  &__input {
    &__prepend, &__append {
      cursor: pointer;
      font-size: 15px;
    }
  }

  p {
    color: $dark;
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
    margin: 0 0 2px 0;
  }
}
</style>
