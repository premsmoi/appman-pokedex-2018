export const calHpLevel = (hp = 0) => {
  if (hp === 'None') return 0
  return parseInt(hp) > 100 ? 100 : parseInt(hp)
}

export const calStrLevel = (attacksLength = []) => {
  let value = attacksLength * 50
  if (value > 100) value = 100
  return value
}

export const calWeakLevel = (weaknessesLength = []) => {
  let value = weaknessesLength * 100
  if (value > 100) value = 100
  return value
}

export const calDamageLevel = (damages = []) => {
  if (damages.length === 0) return 0
  const value = damages
    .map((damage) => {
      if (!damage) damage = '0'
      let value = parseInt(damage.replace(/\+|\*/g, ''))
      return value
    })
    .reduce((acc, val) => acc + val)
  return value
}

export const calHappinessLevel = (hp, damage, weakness) => {
  return Math.ceil((hp / 10 + damage / 10 + 10 - weakness / 100) / 5)
}
