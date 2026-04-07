#!/usr/bin/env python3
import typing
def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    return lambda x: x * multiplier
