// Copyright 2018 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --harmony-regexp-sequence

const re = /\p{Emoji_Modifier_Sequence}/u;

assertTrue(re.test('\u261D\u{1F3FB}'));
assertTrue(re.test('\u{1F9DD}\u{1F3FF}'));
assertTrue(re.test('\u261D\u{1F3FD}'));
assertTrue(re.test('\u261D\u{1F3FE}'));
assertTrue(re.test('\u261D\u{1F3FF}'));
assertTrue(re.test('\u26F9\u{1F3FB}'));
assertTrue(re.test('\u26F9\u{1F3FC}'));
assertTrue(re.test('\u26F9\u{1F3FD}'));
assertTrue(re.test('\u26F9\u{1F3FE}'));
assertTrue(re.test('\u26F9\u{1F3FF}'));
assertTrue(re.test('\u270A\u{1F3FB}'));
assertTrue(re.test('\u270A\u{1F3FC}'));
assertTrue(re.test('\u270A\u{1F3FD}'));
assertTrue(re.test('\u270A\u{1F3FE}'));
assertTrue(re.test('\u270A\u{1F3FF}'));
assertTrue(re.test('\u270B\u{1F3FB}'));
assertTrue(re.test('\u270B\u{1F3FC}'));
assertTrue(re.test('\u270B\u{1F3FD}'));
assertTrue(re.test('\u270B\u{1F3FE}'));
assertTrue(re.test('\u270B\u{1F3FF}'));
assertTrue(re.test('\u270C\u{1F3FB}'));
assertTrue(re.test('\u270C\u{1F3FC}'));
assertTrue(re.test('\u270C\u{1F3FD}'));
assertTrue(re.test('\u270C\u{1F3FE}'));
assertTrue(re.test('\u270C\u{1F3FF}'));
assertTrue(re.test('\u270D\u{1F3FB}'));
assertTrue(re.test('\u270D\u{1F3FC}'));
assertTrue(re.test('\u270D\u{1F3FD}'));
assertTrue(re.test('\u270D\u{1F3FE}'));
assertTrue(re.test('\u270D\u{1F3FF}'));
assertTrue(re.test('\u{1F385}\u{1F3FB}'));
assertTrue(re.test('\u{1F385}\u{1F3FC}'));
assertTrue(re.test('\u{1F385}\u{1F3FD}'));
assertTrue(re.test('\u{1F385}\u{1F3FE}'));
assertTrue(re.test('\u{1F385}\u{1F3FF}'));
assertTrue(re.test('\u{1F3C2}\u{1F3FB}'));
assertTrue(re.test('\u{1F3C2}\u{1F3FC}'));
assertTrue(re.test('\u{1F3C2}\u{1F3FD}'));
assertTrue(re.test('\u{1F3C2}\u{1F3FE}'));
assertTrue(re.test('\u{1F3C2}\u{1F3FF}'));
assertTrue(re.test('\u{1F3C3}\u{1F3FB}'));
assertTrue(re.test('\u{1F3C3}\u{1F3FC}'));
assertTrue(re.test('\u{1F3C3}\u{1F3FD}'));
assertTrue(re.test('\u{1F3C3}\u{1F3FE}'));
assertTrue(re.test('\u{1F3C3}\u{1F3FF}'));
assertTrue(re.test('\u{1F3C4}\u{1F3FB}'));
assertTrue(re.test('\u{1F3C4}\u{1F3FC}'));
assertTrue(re.test('\u{1F3C4}\u{1F3FD}'));
assertTrue(re.test('\u{1F3C4}\u{1F3FE}'));
assertTrue(re.test('\u{1F3C4}\u{1F3FF}'));
assertTrue(re.test('\u{1F3C7}\u{1F3FB}'));
assertTrue(re.test('\u{1F3C7}\u{1F3FC}'));
assertTrue(re.test('\u{1F3C7}\u{1F3FD}'));
assertTrue(re.test('\u{1F3C7}\u{1F3FE}'));
assertTrue(re.test('\u{1F3C7}\u{1F3FF}'));
assertTrue(re.test('\u{1F3CA}\u{1F3FB}'));
assertTrue(re.test('\u{1F3CA}\u{1F3FC}'));
assertTrue(re.test('\u{1F3CA}\u{1F3FD}'));
assertTrue(re.test('\u{1F3CA}\u{1F3FE}'));
assertTrue(re.test('\u{1F3CA}\u{1F3FF}'));
assertTrue(re.test('\u{1F3CB}\u{1F3FB}'));
assertTrue(re.test('\u{1F3CB}\u{1F3FC}'));
assertTrue(re.test('\u{1F3CB}\u{1F3FD}'));
assertTrue(re.test('\u{1F3CB}\u{1F3FE}'));
assertTrue(re.test('\u{1F3CB}\u{1F3FF}'));
assertTrue(re.test('\u{1F3CC}\u{1F3FB}'));
assertTrue(re.test('\u{1F3CC}\u{1F3FC}'));
assertTrue(re.test('\u{1F3CC}\u{1F3FD}'));
assertTrue(re.test('\u{1F3CC}\u{1F3FE}'));
assertTrue(re.test('\u{1F3CC}\u{1F3FF}'));
assertTrue(re.test('\u{1F442}\u{1F3FB}'));
assertTrue(re.test('\u{1F442}\u{1F3FC}'));
assertTrue(re.test('\u{1F442}\u{1F3FD}'));
assertTrue(re.test('\u{1F442}\u{1F3FE}'));
assertTrue(re.test('\u{1F442}\u{1F3FF}'));
assertTrue(re.test('\u{1F443}\u{1F3FB}'));
assertTrue(re.test('\u{1F443}\u{1F3FC}'));
assertTrue(re.test('\u{1F443}\u{1F3FD}'));
assertTrue(re.test('\u{1F443}\u{1F3FE}'));
assertTrue(re.test('\u{1F443}\u{1F3FF}'));
assertTrue(re.test('\u{1F446}\u{1F3FB}'));
assertTrue(re.test('\u{1F446}\u{1F3FC}'));
assertTrue(re.test('\u{1F446}\u{1F3FD}'));
assertTrue(re.test('\u{1F446}\u{1F3FE}'));
assertTrue(re.test('\u{1F446}\u{1F3FF}'));
assertTrue(re.test('\u{1F447}\u{1F3FB}'));
assertTrue(re.test('\u{1F447}\u{1F3FC}'));
assertTrue(re.test('\u{1F447}\u{1F3FD}'));
assertTrue(re.test('\u{1F447}\u{1F3FE}'));
assertTrue(re.test('\u{1F447}\u{1F3FF}'));
assertTrue(re.test('\u{1F448}\u{1F3FB}'));
assertTrue(re.test('\u{1F448}\u{1F3FC}'));
assertTrue(re.test('\u{1F448}\u{1F3FD}'));
assertTrue(re.test('\u{1F448}\u{1F3FE}'));
assertTrue(re.test('\u{1F448}\u{1F3FF}'));
assertTrue(re.test('\u{1F449}\u{1F3FB}'));
assertTrue(re.test('\u{1F449}\u{1F3FC}'));
assertTrue(re.test('\u{1F449}\u{1F3FD}'));
assertTrue(re.test('\u{1F449}\u{1F3FE}'));
assertTrue(re.test('\u{1F449}\u{1F3FF}'));
assertTrue(re.test('\u{1F44A}\u{1F3FB}'));
assertTrue(re.test('\u{1F44A}\u{1F3FC}'));
assertTrue(re.test('\u{1F44A}\u{1F3FD}'));
assertTrue(re.test('\u{1F44A}\u{1F3FE}'));
assertTrue(re.test('\u{1F44A}\u{1F3FF}'));
assertTrue(re.test('\u{1F44B}\u{1F3FB}'));
assertTrue(re.test('\u{1F44B}\u{1F3FC}'));
assertTrue(re.test('\u{1F44B}\u{1F3FD}'));
assertTrue(re.test('\u{1F44B}\u{1F3FE}'));
assertTrue(re.test('\u{1F44B}\u{1F3FF}'));
assertTrue(re.test('\u{1F44C}\u{1F3FB}'));
assertTrue(re.test('\u{1F44C}\u{1F3FC}'));
assertTrue(re.test('\u{1F44C}\u{1F3FD}'));
assertTrue(re.test('\u{1F44C}\u{1F3FE}'));
assertTrue(re.test('\u{1F44C}\u{1F3FF}'));
assertTrue(re.test('\u{1F44D}\u{1F3FB}'));
assertTrue(re.test('\u{1F44D}\u{1F3FC}'));
assertTrue(re.test('\u{1F44D}\u{1F3FD}'));
assertTrue(re.test('\u{1F44D}\u{1F3FE}'));
assertTrue(re.test('\u{1F44D}\u{1F3FF}'));
assertTrue(re.test('\u{1F44E}\u{1F3FB}'));
assertTrue(re.test('\u{1F44E}\u{1F3FC}'));
assertTrue(re.test('\u{1F44E}\u{1F3FD}'));
assertTrue(re.test('\u{1F44E}\u{1F3FE}'));
assertTrue(re.test('\u{1F44E}\u{1F3FF}'));
assertTrue(re.test('\u{1F44F}\u{1F3FB}'));
assertTrue(re.test('\u{1F44F}\u{1F3FC}'));
assertTrue(re.test('\u{1F44F}\u{1F3FD}'));
assertTrue(re.test('\u{1F44F}\u{1F3FE}'));
assertTrue(re.test('\u{1F44F}\u{1F3FF}'));
assertTrue(re.test('\u{1F450}\u{1F3FB}'));
assertTrue(re.test('\u{1F450}\u{1F3FC}'));
assertTrue(re.test('\u{1F450}\u{1F3FD}'));
assertTrue(re.test('\u{1F450}\u{1F3FE}'));
assertTrue(re.test('\u{1F450}\u{1F3FF}'));
assertTrue(re.test('\u{1F466}\u{1F3FB}'));
assertTrue(re.test('\u{1F466}\u{1F3FC}'));
assertTrue(re.test('\u{1F466}\u{1F3FD}'));
assertTrue(re.test('\u{1F466}\u{1F3FE}'));
assertTrue(re.test('\u{1F466}\u{1F3FF}'));
assertTrue(re.test('\u{1F467}\u{1F3FB}'));
assertTrue(re.test('\u{1F467}\u{1F3FC}'));
assertTrue(re.test('\u{1F467}\u{1F3FD}'));
assertTrue(re.test('\u{1F467}\u{1F3FE}'));
assertTrue(re.test('\u{1F467}\u{1F3FF}'));
assertTrue(re.test('\u{1F468}\u{1F3FB}'));
assertTrue(re.test('\u{1F468}\u{1F3FC}'));
assertTrue(re.test('\u{1F468}\u{1F3FD}'));
assertTrue(re.test('\u{1F468}\u{1F3FE}'));
assertTrue(re.test('\u{1F468}\u{1F3FF}'));
assertTrue(re.test('\u{1F469}\u{1F3FB}'));
assertTrue(re.test('\u{1F469}\u{1F3FC}'));
assertTrue(re.test('\u{1F469}\u{1F3FD}'));
assertTrue(re.test('\u{1F469}\u{1F3FE}'));
assertTrue(re.test('\u{1F469}\u{1F3FF}'));
assertTrue(re.test('\u{1F46E}\u{1F3FB}'));
assertTrue(re.test('\u{1F46E}\u{1F3FC}'));
assertTrue(re.test('\u{1F46E}\u{1F3FD}'));
assertTrue(re.test('\u{1F46E}\u{1F3FE}'));
assertTrue(re.test('\u{1F46E}\u{1F3FF}'));
assertTrue(re.test('\u{1F470}\u{1F3FB}'));
assertTrue(re.test('\u{1F470}\u{1F3FC}'));
assertTrue(re.test('\u{1F470}\u{1F3FD}'));
assertTrue(re.test('\u{1F470}\u{1F3FE}'));
assertTrue(re.test('\u{1F470}\u{1F3FF}'));
assertTrue(re.test('\u{1F471}\u{1F3FB}'));
assertTrue(re.test('\u{1F471}\u{1F3FC}'));
assertTrue(re.test('\u{1F471}\u{1F3FD}'));
assertTrue(re.test('\u{1F471}\u{1F3FE}'));
assertTrue(re.test('\u{1F471}\u{1F3FF}'));
assertTrue(re.test('\u{1F472}\u{1F3FB}'));
assertTrue(re.test('\u{1F472}\u{1F3FC}'));
assertTrue(re.test('\u{1F472}\u{1F3FD}'));
assertTrue(re.test('\u{1F472}\u{1F3FE}'));
assertTrue(re.test('\u{1F472}\u{1F3FF}'));
assertTrue(re.test('\u{1F473}\u{1F3FB}'));
assertTrue(re.test('\u{1F473}\u{1F3FC}'));
assertTrue(re.test('\u{1F473}\u{1F3FD}'));
assertTrue(re.test('\u{1F473}\u{1F3FE}'));
assertTrue(re.test('\u{1F473}\u{1F3FF}'));
assertTrue(re.test('\u{1F474}\u{1F3FB}'));
assertTrue(re.test('\u{1F474}\u{1F3FC}'));
assertTrue(re.test('\u{1F474}\u{1F3FD}'));
assertTrue(re.test('\u{1F474}\u{1F3FE}'));
assertTrue(re.test('\u{1F474}\u{1F3FF}'));
assertTrue(re.test('\u{1F475}\u{1F3FB}'));
assertTrue(re.test('\u{1F475}\u{1F3FC}'));
assertTrue(re.test('\u{1F475}\u{1F3FD}'));
assertTrue(re.test('\u{1F475}\u{1F3FE}'));
assertTrue(re.test('\u{1F475}\u{1F3FF}'));
assertTrue(re.test('\u{1F476}\u{1F3FB}'));
assertTrue(re.test('\u{1F476}\u{1F3FC}'));
assertTrue(re.test('\u{1F476}\u{1F3FD}'));
assertTrue(re.test('\u{1F476}\u{1F3FE}'));
assertTrue(re.test('\u{1F476}\u{1F3FF}'));
assertTrue(re.test('\u{1F477}\u{1F3FB}'));
assertTrue(re.test('\u{1F477}\u{1F3FC}'));
assertTrue(re.test('\u{1F477}\u{1F3FD}'));
assertTrue(re.test('\u{1F477}\u{1F3FE}'));
assertTrue(re.test('\u{1F477}\u{1F3FF}'));
assertTrue(re.test('\u{1F478}\u{1F3FB}'));
assertTrue(re.test('\u{1F478}\u{1F3FC}'));
assertTrue(re.test('\u{1F478}\u{1F3FD}'));
assertTrue(re.test('\u{1F478}\u{1F3FE}'));
assertTrue(re.test('\u{1F478}\u{1F3FF}'));
assertTrue(re.test('\u{1F47C}\u{1F3FB}'));
assertTrue(re.test('\u{1F47C}\u{1F3FC}'));
assertTrue(re.test('\u{1F47C}\u{1F3FD}'));
assertTrue(re.test('\u{1F47C}\u{1F3FE}'));
assertTrue(re.test('\u{1F47C}\u{1F3FF}'));
assertTrue(re.test('\u{1F481}\u{1F3FB}'));
assertTrue(re.test('\u{1F481}\u{1F3FC}'));
assertTrue(re.test('\u{1F481}\u{1F3FD}'));
assertTrue(re.test('\u{1F481}\u{1F3FE}'));
assertTrue(re.test('\u{1F481}\u{1F3FF}'));
assertTrue(re.test('\u{1F482}\u{1F3FB}'));
assertTrue(re.test('\u{1F482}\u{1F3FC}'));
assertTrue(re.test('\u{1F482}\u{1F3FD}'));
assertTrue(re.test('\u{1F482}\u{1F3FE}'));
assertTrue(re.test('\u{1F482}\u{1F3FF}'));
assertTrue(re.test('\u{1F483}\u{1F3FB}'));
assertTrue(re.test('\u{1F483}\u{1F3FC}'));
assertTrue(re.test('\u{1F483}\u{1F3FD}'));
assertTrue(re.test('\u{1F483}\u{1F3FE}'));
assertTrue(re.test('\u{1F483}\u{1F3FF}'));
assertTrue(re.test('\u{1F485}\u{1F3FB}'));
assertTrue(re.test('\u{1F485}\u{1F3FC}'));
assertTrue(re.test('\u{1F485}\u{1F3FD}'));
assertTrue(re.test('\u{1F485}\u{1F3FE}'));
assertTrue(re.test('\u{1F485}\u{1F3FF}'));
assertTrue(re.test('\u{1F486}\u{1F3FB}'));
assertTrue(re.test('\u{1F486}\u{1F3FC}'));
assertTrue(re.test('\u{1F486}\u{1F3FD}'));
assertTrue(re.test('\u{1F486}\u{1F3FE}'));
assertTrue(re.test('\u{1F486}\u{1F3FF}'));
assertTrue(re.test('\u{1F487}\u{1F3FB}'));
assertTrue(re.test('\u{1F487}\u{1F3FC}'));
assertTrue(re.test('\u{1F487}\u{1F3FD}'));
assertTrue(re.test('\u{1F487}\u{1F3FE}'));
assertTrue(re.test('\u{1F487}\u{1F3FF}'));
assertTrue(re.test('\u{1F4AA}\u{1F3FB}'));
assertTrue(re.test('\u{1F4AA}\u{1F3FC}'));
assertTrue(re.test('\u{1F4AA}\u{1F3FD}'));
assertTrue(re.test('\u{1F4AA}\u{1F3FE}'));
assertTrue(re.test('\u{1F4AA}\u{1F3FF}'));
assertTrue(re.test('\u{1F574}\u{1F3FB}'));
assertTrue(re.test('\u{1F574}\u{1F3FC}'));
assertTrue(re.test('\u{1F574}\u{1F3FD}'));
assertTrue(re.test('\u{1F574}\u{1F3FE}'));
assertTrue(re.test('\u{1F574}\u{1F3FF}'));
assertTrue(re.test('\u{1F575}\u{1F3FB}'));
assertTrue(re.test('\u{1F575}\u{1F3FC}'));
assertTrue(re.test('\u{1F575}\u{1F3FD}'));
assertTrue(re.test('\u{1F575}\u{1F3FE}'));
assertTrue(re.test('\u{1F575}\u{1F3FF}'));
assertTrue(re.test('\u{1F57A}\u{1F3FB}'));
assertTrue(re.test('\u{1F57A}\u{1F3FC}'));
assertTrue(re.test('\u{1F57A}\u{1F3FD}'));
assertTrue(re.test('\u{1F57A}\u{1F3FE}'));
assertTrue(re.test('\u{1F57A}\u{1F3FF}'));
assertTrue(re.test('\u{1F590}\u{1F3FB}'));
assertTrue(re.test('\u{1F590}\u{1F3FC}'));
assertTrue(re.test('\u{1F590}\u{1F3FD}'));
assertTrue(re.test('\u{1F590}\u{1F3FE}'));
assertTrue(re.test('\u{1F590}\u{1F3FF}'));
assertTrue(re.test('\u261D\u{1F3FC}'));
assertTrue(re.test('\u{1F595}\u{1F3FC}'));
assertTrue(re.test('\u{1F595}\u{1F3FD}'));
assertTrue(re.test('\u{1F595}\u{1F3FE}'));
assertTrue(re.test('\u{1F595}\u{1F3FF}'));
assertTrue(re.test('\u{1F596}\u{1F3FB}'));
assertTrue(re.test('\u{1F596}\u{1F3FC}'));
assertTrue(re.test('\u{1F596}\u{1F3FD}'));
assertTrue(re.test('\u{1F596}\u{1F3FE}'));
assertTrue(re.test('\u{1F596}\u{1F3FF}'));
assertTrue(re.test('\u{1F645}\u{1F3FB}'));
assertTrue(re.test('\u{1F645}\u{1F3FC}'));
assertTrue(re.test('\u{1F645}\u{1F3FD}'));
assertTrue(re.test('\u{1F645}\u{1F3FE}'));
assertTrue(re.test('\u{1F645}\u{1F3FF}'));
assertTrue(re.test('\u{1F646}\u{1F3FB}'));
assertTrue(re.test('\u{1F646}\u{1F3FC}'));
assertTrue(re.test('\u{1F646}\u{1F3FD}'));
assertTrue(re.test('\u{1F646}\u{1F3FE}'));
assertTrue(re.test('\u{1F646}\u{1F3FF}'));
assertTrue(re.test('\u{1F647}\u{1F3FB}'));
assertTrue(re.test('\u{1F647}\u{1F3FC}'));
assertTrue(re.test('\u{1F647}\u{1F3FD}'));
assertTrue(re.test('\u{1F647}\u{1F3FE}'));
assertTrue(re.test('\u{1F647}\u{1F3FF}'));
assertTrue(re.test('\u{1F64B}\u{1F3FB}'));
assertTrue(re.test('\u{1F64B}\u{1F3FC}'));
assertTrue(re.test('\u{1F64B}\u{1F3FD}'));
assertTrue(re.test('\u{1F64B}\u{1F3FE}'));
assertTrue(re.test('\u{1F64B}\u{1F3FF}'));
assertTrue(re.test('\u{1F64C}\u{1F3FB}'));
assertTrue(re.test('\u{1F64C}\u{1F3FC}'));
assertTrue(re.test('\u{1F64C}\u{1F3FD}'));
assertTrue(re.test('\u{1F64C}\u{1F3FE}'));
assertTrue(re.test('\u{1F64C}\u{1F3FF}'));
assertTrue(re.test('\u{1F64D}\u{1F3FB}'));
assertTrue(re.test('\u{1F64D}\u{1F3FC}'));
assertTrue(re.test('\u{1F64D}\u{1F3FD}'));
assertTrue(re.test('\u{1F64D}\u{1F3FE}'));
assertTrue(re.test('\u{1F64D}\u{1F3FF}'));
assertTrue(re.test('\u{1F64E}\u{1F3FB}'));
assertTrue(re.test('\u{1F64E}\u{1F3FC}'));
assertTrue(re.test('\u{1F64E}\u{1F3FD}'));
assertTrue(re.test('\u{1F64E}\u{1F3FE}'));
assertTrue(re.test('\u{1F64E}\u{1F3FF}'));
assertTrue(re.test('\u{1F64F}\u{1F3FB}'));
assertTrue(re.test('\u{1F64F}\u{1F3FC}'));
assertTrue(re.test('\u{1F64F}\u{1F3FD}'));
assertTrue(re.test('\u{1F64F}\u{1F3FE}'));
assertTrue(re.test('\u{1F64F}\u{1F3FF}'));
assertTrue(re.test('\u{1F6A3}\u{1F3FB}'));
assertTrue(re.test('\u{1F6A3}\u{1F3FC}'));
assertTrue(re.test('\u{1F6A3}\u{1F3FD}'));
assertTrue(re.test('\u{1F6A3}\u{1F3FE}'));
assertTrue(re.test('\u{1F6A3}\u{1F3FF}'));
assertTrue(re.test('\u{1F6B4}\u{1F3FB}'));
assertTrue(re.test('\u{1F6B4}\u{1F3FC}'));
assertTrue(re.test('\u{1F6B4}\u{1F3FD}'));
assertTrue(re.test('\u{1F6B4}\u{1F3FE}'));
assertTrue(re.test('\u{1F6B4}\u{1F3FF}'));
assertTrue(re.test('\u{1F6B5}\u{1F3FB}'));
assertTrue(re.test('\u{1F6B5}\u{1F3FC}'));
assertTrue(re.test('\u{1F6B5}\u{1F3FD}'));
assertTrue(re.test('\u{1F6B5}\u{1F3FE}'));
assertTrue(re.test('\u{1F6B5}\u{1F3FF}'));
assertTrue(re.test('\u{1F6B6}\u{1F3FB}'));
assertTrue(re.test('\u{1F6B6}\u{1F3FC}'));
assertTrue(re.test('\u{1F6B6}\u{1F3FD}'));
assertTrue(re.test('\u{1F6B6}\u{1F3FE}'));
assertTrue(re.test('\u{1F6B6}\u{1F3FF}'));
assertTrue(re.test('\u{1F6C0}\u{1F3FB}'));
assertTrue(re.test('\u{1F6C0}\u{1F3FC}'));
assertTrue(re.test('\u{1F6C0}\u{1F3FD}'));
assertTrue(re.test('\u{1F6C0}\u{1F3FE}'));
assertTrue(re.test('\u{1F6C0}\u{1F3FF}'));
assertTrue(re.test('\u{1F6CC}\u{1F3FB}'));
assertTrue(re.test('\u{1F6CC}\u{1F3FC}'));
assertTrue(re.test('\u{1F6CC}\u{1F3FD}'));
assertTrue(re.test('\u{1F6CC}\u{1F3FE}'));
assertTrue(re.test('\u{1F6CC}\u{1F3FF}'));
assertTrue(re.test('\u{1F918}\u{1F3FB}'));
assertTrue(re.test('\u{1F918}\u{1F3FC}'));
assertTrue(re.test('\u{1F918}\u{1F3FD}'));
assertTrue(re.test('\u{1F918}\u{1F3FE}'));
assertTrue(re.test('\u{1F918}\u{1F3FF}'));
assertTrue(re.test('\u{1F919}\u{1F3FB}'));
assertTrue(re.test('\u{1F919}\u{1F3FC}'));
assertTrue(re.test('\u{1F919}\u{1F3FD}'));
assertTrue(re.test('\u{1F919}\u{1F3FE}'));
assertTrue(re.test('\u{1F919}\u{1F3FF}'));
assertTrue(re.test('\u{1F91A}\u{1F3FB}'));
assertTrue(re.test('\u{1F91A}\u{1F3FC}'));
assertTrue(re.test('\u{1F91A}\u{1F3FD}'));
assertTrue(re.test('\u{1F91A}\u{1F3FE}'));
assertTrue(re.test('\u{1F91A}\u{1F3FF}'));
assertTrue(re.test('\u{1F91B}\u{1F3FB}'));
assertTrue(re.test('\u{1F91B}\u{1F3FC}'));
assertTrue(re.test('\u{1F91B}\u{1F3FD}'));
assertTrue(re.test('\u{1F91B}\u{1F3FE}'));
assertTrue(re.test('\u{1F91B}\u{1F3FF}'));
assertTrue(re.test('\u{1F91C}\u{1F3FB}'));
assertTrue(re.test('\u{1F91C}\u{1F3FC}'));
assertTrue(re.test('\u{1F91C}\u{1F3FD}'));
assertTrue(re.test('\u{1F91C}\u{1F3FE}'));
assertTrue(re.test('\u{1F91C}\u{1F3FF}'));
assertTrue(re.test('\u{1F91E}\u{1F3FB}'));
assertTrue(re.test('\u{1F91E}\u{1F3FC}'));
assertTrue(re.test('\u{1F91E}\u{1F3FD}'));
assertTrue(re.test('\u{1F91E}\u{1F3FE}'));
assertTrue(re.test('\u{1F91E}\u{1F3FF}'));
assertTrue(re.test('\u{1F91F}\u{1F3FB}'));
assertTrue(re.test('\u{1F91F}\u{1F3FC}'));
assertTrue(re.test('\u{1F91F}\u{1F3FD}'));
assertTrue(re.test('\u{1F91F}\u{1F3FE}'));
assertTrue(re.test('\u{1F91F}\u{1F3FF}'));
assertTrue(re.test('\u{1F926}\u{1F3FB}'));
assertTrue(re.test('\u{1F926}\u{1F3FC}'));
assertTrue(re.test('\u{1F926}\u{1F3FD}'));
assertTrue(re.test('\u{1F926}\u{1F3FE}'));
assertTrue(re.test('\u{1F926}\u{1F3FF}'));
assertTrue(re.test('\u{1F930}\u{1F3FB}'));
assertTrue(re.test('\u{1F930}\u{1F3FC}'));
assertTrue(re.test('\u{1F930}\u{1F3FD}'));
assertTrue(re.test('\u{1F930}\u{1F3FE}'));
assertTrue(re.test('\u{1F930}\u{1F3FF}'));
assertTrue(re.test('\u{1F931}\u{1F3FB}'));
assertTrue(re.test('\u{1F931}\u{1F3FC}'));
assertTrue(re.test('\u{1F931}\u{1F3FD}'));
assertTrue(re.test('\u{1F931}\u{1F3FE}'));
assertTrue(re.test('\u{1F931}\u{1F3FF}'));
assertTrue(re.test('\u{1F932}\u{1F3FB}'));
assertTrue(re.test('\u{1F932}\u{1F3FC}'));
assertTrue(re.test('\u{1F932}\u{1F3FD}'));
assertTrue(re.test('\u{1F932}\u{1F3FE}'));
assertTrue(re.test('\u{1F932}\u{1F3FF}'));
assertTrue(re.test('\u{1F933}\u{1F3FB}'));
assertTrue(re.test('\u{1F933}\u{1F3FC}'));
assertTrue(re.test('\u{1F933}\u{1F3FD}'));
assertTrue(re.test('\u{1F933}\u{1F3FE}'));
assertTrue(re.test('\u{1F933}\u{1F3FF}'));
assertTrue(re.test('\u{1F934}\u{1F3FB}'));
assertTrue(re.test('\u{1F934}\u{1F3FC}'));
assertTrue(re.test('\u{1F934}\u{1F3FD}'));
assertTrue(re.test('\u{1F934}\u{1F3FE}'));
assertTrue(re.test('\u{1F934}\u{1F3FF}'));
assertTrue(re.test('\u{1F935}\u{1F3FB}'));
assertTrue(re.test('\u{1F935}\u{1F3FC}'));
assertTrue(re.test('\u{1F935}\u{1F3FD}'));
assertTrue(re.test('\u{1F935}\u{1F3FE}'));
assertTrue(re.test('\u{1F935}\u{1F3FF}'));
assertTrue(re.test('\u{1F936}\u{1F3FB}'));
assertTrue(re.test('\u{1F936}\u{1F3FC}'));
assertTrue(re.test('\u{1F936}\u{1F3FD}'));
assertTrue(re.test('\u{1F936}\u{1F3FE}'));
assertTrue(re.test('\u{1F936}\u{1F3FF}'));
assertTrue(re.test('\u{1F937}\u{1F3FB}'));
assertTrue(re.test('\u{1F937}\u{1F3FC}'));
assertTrue(re.test('\u{1F937}\u{1F3FD}'));
assertTrue(re.test('\u{1F937}\u{1F3FE}'));
assertTrue(re.test('\u{1F937}\u{1F3FF}'));
assertTrue(re.test('\u{1F938}\u{1F3FB}'));
assertTrue(re.test('\u{1F938}\u{1F3FC}'));
assertTrue(re.test('\u{1F938}\u{1F3FD}'));
assertTrue(re.test('\u{1F938}\u{1F3FE}'));
assertTrue(re.test('\u{1F938}\u{1F3FF}'));
assertTrue(re.test('\u{1F939}\u{1F3FB}'));
assertTrue(re.test('\u{1F939}\u{1F3FC}'));
assertTrue(re.test('\u{1F939}\u{1F3FD}'));
assertTrue(re.test('\u{1F939}\u{1F3FE}'));
assertTrue(re.test('\u{1F939}\u{1F3FF}'));
assertTrue(re.test('\u{1F93D}\u{1F3FB}'));
assertTrue(re.test('\u{1F93D}\u{1F3FC}'));
assertTrue(re.test('\u{1F93D}\u{1F3FD}'));
assertTrue(re.test('\u{1F93D}\u{1F3FE}'));
assertTrue(re.test('\u{1F93D}\u{1F3FF}'));
assertTrue(re.test('\u{1F93E}\u{1F3FB}'));
assertTrue(re.test('\u{1F93E}\u{1F3FC}'));
assertTrue(re.test('\u{1F93E}\u{1F3FD}'));
assertTrue(re.test('\u{1F93E}\u{1F3FE}'));
assertTrue(re.test('\u{1F93E}\u{1F3FF}'));
assertTrue(re.test('\u{1F9B5}\u{1F3FB}'));
assertTrue(re.test('\u{1F9B5}\u{1F3FC}'));
assertTrue(re.test('\u{1F9B5}\u{1F3FD}'));
assertTrue(re.test('\u{1F9B5}\u{1F3FE}'));
assertTrue(re.test('\u{1F9B5}\u{1F3FF}'));
assertTrue(re.test('\u{1F9B6}\u{1F3FB}'));
assertTrue(re.test('\u{1F9B6}\u{1F3FC}'));
assertTrue(re.test('\u{1F9B6}\u{1F3FD}'));
assertTrue(re.test('\u{1F9B6}\u{1F3FE}'));
assertTrue(re.test('\u{1F9B6}\u{1F3FF}'));
assertTrue(re.test('\u{1F9B8}\u{1F3FB}'));
assertTrue(re.test('\u{1F9B8}\u{1F3FC}'));
assertTrue(re.test('\u{1F9B8}\u{1F3FD}'));
assertTrue(re.test('\u{1F9B8}\u{1F3FE}'));
assertTrue(re.test('\u{1F9B8}\u{1F3FF}'));
assertTrue(re.test('\u{1F9B9}\u{1F3FB}'));
assertTrue(re.test('\u{1F9B9}\u{1F3FC}'));
assertTrue(re.test('\u{1F9B9}\u{1F3FD}'));
assertTrue(re.test('\u{1F9B9}\u{1F3FE}'));
assertTrue(re.test('\u{1F9B9}\u{1F3FF}'));
assertTrue(re.test('\u{1F9D1}\u{1F3FB}'));
assertTrue(re.test('\u{1F9D1}\u{1F3FC}'));
assertTrue(re.test('\u{1F9D1}\u{1F3FD}'));
assertTrue(re.test('\u{1F9D1}\u{1F3FE}'));
assertTrue(re.test('\u{1F9D1}\u{1F3FF}'));
assertTrue(re.test('\u{1F9D2}\u{1F3FB}'));
assertTrue(re.test('\u{1F9D2}\u{1F3FC}'));
assertTrue(re.test('\u{1F9D2}\u{1F3FD}'));
assertTrue(re.test('\u{1F9D2}\u{1F3FE}'));
assertTrue(re.test('\u{1F9D2}\u{1F3FF}'));
assertTrue(re.test('\u{1F9D3}\u{1F3FB}'));
assertTrue(re.test('\u{1F9D3}\u{1F3FC}'));
assertTrue(re.test('\u{1F9D3}\u{1F3FD}'));
assertTrue(re.test('\u{1F9D3}\u{1F3FE}'));
assertTrue(re.test('\u{1F9D3}\u{1F3FF}'));
assertTrue(re.test('\u{1F9D4}\u{1F3FB}'));
assertTrue(re.test('\u{1F9D4}\u{1F3FC}'));
assertTrue(re.test('\u{1F9D4}\u{1F3FD}'));
assertTrue(re.test('\u{1F9D4}\u{1F3FE}'));
assertTrue(re.test('\u{1F9D4}\u{1F3FF}'));
assertTrue(re.test('\u{1F9D5}\u{1F3FB}'));
assertTrue(re.test('\u{1F9D5}\u{1F3FC}'));
assertTrue(re.test('\u{1F9D5}\u{1F3FD}'));
assertTrue(re.test('\u{1F9D5}\u{1F3FE}'));
assertTrue(re.test('\u{1F9D5}\u{1F3FF}'));
assertTrue(re.test('\u{1F9D6}\u{1F3FB}'));
assertTrue(re.test('\u{1F9D6}\u{1F3FC}'));
assertTrue(re.test('\u{1F9D6}\u{1F3FD}'));
assertTrue(re.test('\u{1F9D6}\u{1F3FE}'));
assertTrue(re.test('\u{1F9D6}\u{1F3FF}'));
assertTrue(re.test('\u{1F9D7}\u{1F3FB}'));
assertTrue(re.test('\u{1F9D7}\u{1F3FC}'));
assertTrue(re.test('\u{1F9D7}\u{1F3FD}'));
assertTrue(re.test('\u{1F9D7}\u{1F3FE}'));
assertTrue(re.test('\u{1F9D7}\u{1F3FF}'));
assertTrue(re.test('\u{1F9D8}\u{1F3FB}'));
assertTrue(re.test('\u{1F9D8}\u{1F3FC}'));
assertTrue(re.test('\u{1F9D8}\u{1F3FD}'));
assertTrue(re.test('\u{1F9D8}\u{1F3FE}'));
assertTrue(re.test('\u{1F9D8}\u{1F3FF}'));
assertTrue(re.test('\u{1F9D9}\u{1F3FB}'));
assertTrue(re.test('\u{1F9D9}\u{1F3FC}'));
assertTrue(re.test('\u{1F9D9}\u{1F3FD}'));
assertTrue(re.test('\u{1F9D9}\u{1F3FE}'));
assertTrue(re.test('\u{1F9D9}\u{1F3FF}'));
assertTrue(re.test('\u{1F9DA}\u{1F3FB}'));
assertTrue(re.test('\u{1F9DA}\u{1F3FC}'));
assertTrue(re.test('\u{1F9DA}\u{1F3FD}'));
assertTrue(re.test('\u{1F9DA}\u{1F3FE}'));
assertTrue(re.test('\u{1F9DA}\u{1F3FF}'));
assertTrue(re.test('\u{1F9DB}\u{1F3FB}'));
assertTrue(re.test('\u{1F9DB}\u{1F3FC}'));
assertTrue(re.test('\u{1F9DB}\u{1F3FD}'));
assertTrue(re.test('\u{1F9DB}\u{1F3FE}'));
assertTrue(re.test('\u{1F9DB}\u{1F3FF}'));
assertTrue(re.test('\u{1F9DC}\u{1F3FB}'));
assertTrue(re.test('\u{1F9DC}\u{1F3FC}'));
assertTrue(re.test('\u{1F9DC}\u{1F3FD}'));
assertTrue(re.test('\u{1F9DC}\u{1F3FE}'));
assertTrue(re.test('\u{1F9DC}\u{1F3FF}'));
assertTrue(re.test('\u{1F9DD}\u{1F3FB}'));
assertTrue(re.test('\u{1F9DD}\u{1F3FC}'));
assertTrue(re.test('\u{1F9DD}\u{1F3FD}'));
assertTrue(re.test('\u{1F9DD}\u{1F3FE}'));
assertTrue(re.test('\u{1F595}\u{1F3FB}'));
