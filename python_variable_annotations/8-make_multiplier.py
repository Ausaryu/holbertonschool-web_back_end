#!/usr/bin/env python3
'''
Multiplier factory module.
'''

import typing


def make_multiplier(multiplier: float) -> typing.Callable[[float], float]:
    '''
    Returns a function that multiplies a float by the given multiplier.
    '''
    return lambda x: x * multiplier
